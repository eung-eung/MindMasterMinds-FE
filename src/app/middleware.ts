import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('currentUser')?.value
    console.log('middleware: ', currentUser);

    if (!currentUser) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

}

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }