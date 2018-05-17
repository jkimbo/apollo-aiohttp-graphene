import json

from aiohttp import web
from schema import schema
from graphql import format_error
from graphql_ws.aiohttp import AiohttpSubscriptionServer

import aiohttp_cors

from template import render_graphiql

async def graphql_post(request):
    payload = await request.json()
    response = await schema.execute(payload.get('query', ''), return_promise=True)
    data = {}
    if response.errors:
        data['errors'] = [format_error(e) for e in response.errors]
    if response.data:
        data['data'] = response.data
    jsondata = json.dumps(data,)
    return web.Response(text=jsondata, headers={'Content-Type': 'application/json'})


async def graphql_view(request):
    return web.Response(text=render_graphiql(), headers={'Content-Type': 'text/html'})

subscription_server = AiohttpSubscriptionServer(schema)


async def subscriptions(request):
    ws = web.WebSocketResponse(protocols=('graphql-ws',))
    await ws.prepare(request)

    await subscription_server.handle(ws)
    return ws


app = web.Application()
# app.router.add_get('/subscriptions', subscriptions)
# app.router.add_get('/', graphiql_view)
# app.router.add_get('/graphql', graphql_view)
# app.router.add_post('/graphql', graphql_view)

# `aiohttp_cors.setup` returns `aiohttp_cors.CorsConfig` instance.
# The `cors` instance will store CORS configuration for the
# application.
cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
        )
})

# Add all resources to `CorsConfig`.
# resource = cors.add(app.router.add_resource('/'))
# cors.add(resource.add_route('GET', graphiql_view))
# cors.add(resource.add_route('POST', graphql_view))

# Configure CORS on all routes.
# for route in list(app.router.routes()):
#     cors.add(route)
#     print (route)
resource = cors.add(app.router.add_resource("/"))
cors.add(resource.add_route("GET", graphql_view), {})
# cors.add(resource.add_route("POST", graphql_view), {})

graphql = cors.add(app.router.add_resource("/graphql"))
cors.add(graphql.add_route("GET", graphql_post), {})
cors.add(graphql.add_route("POST", graphql_post), {})

sub = cors.add(app.router.add_resource("/subscriptions"))
cors.add(sub.add_route("GET", subscriptions), {})
cors.add(sub.add_route("POST", subscriptions), {})


web.run_app(app, port=8000)
