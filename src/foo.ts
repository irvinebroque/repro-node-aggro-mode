export async function foo() {
    // Only try to import node:net if not in a Workers environment
    if (navigator.userAgent !== 'Cloudflare-Workers') {
        // Esbuild sees this, and we warn you:
        //     ✘ [ERROR] Could not resolve "node:net"
        //     src/foo.ts:4:28:
        //       4 │         const net = require('node:net');
        //         ╵                             ~~~~~~~~~~
        //   The package "node:net" wasn't found on the file system but is built into node.
        //   Add "node_compat = true" to your wrangler.toml file to enable Node.js compatibility.

        // Even though this line is never actually reached:

        const net = await import('node:net'); // Or const net = require('node:net');
    }
    // else...
}