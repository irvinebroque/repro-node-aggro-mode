export async function foo() {
    // Only try to import node:net if not in a Workers environment
    if (navigator.userAgent !== 'Cloudflare-Workers') {
        const net = await import('node:net'); 
    }
    // else...
}