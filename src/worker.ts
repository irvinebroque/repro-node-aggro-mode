export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const foo = await import('./foo.ts');
		return new Response('Hello World!');
	},
};
