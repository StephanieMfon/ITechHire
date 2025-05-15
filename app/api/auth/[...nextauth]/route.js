// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       httpOptions: {
//         timeout: 40000,
//       },
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   cookies: {
//     state: {
//       name: "next-auth.state",
//       options: {
//         httpOnly: true,
//         sameSite: "lax",
//         path: "/",
//         secure: process.env.NODE_ENV === "production",
//       },
//     },
//   },

//   callbacks: {
//     async jwt({ token, account, profile, user, session }) {
//       console.log(session);
//       // Get userType from query params or session
//       const userType = session?.userType || "company"; // default to talent if not specified

//       if (account) {
//         // This is the initial sign in
//         token.userType = userType;
//         token.accessToken = account.access_token;

//         // Pass the ID token to your backend
//         try {
//           const response = await fetch(
//             `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
//             {
//               method: "POST",
//               headers: {
//                 Authorization: `Bearer ${account.id_token}`,
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({ userType: userType }),
//             }
//           );

//           if (response.ok) {
//             const data = await response.json();
//             token.backendToken = data.authToken;
//           }
//         } catch (error) {
//           console.error("Error authenticating with backend:", error);
//         }
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.userType = token.userType;
//       session.authToken = token.backendToken;
//       return session;
//     },
//   },

// });

// export { handler as GET, handler as POST, handler };

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 40000,
      },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    state: {
      name: "next-auth.state",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  callbacks: {
    async jwt({ token, account, profile, user, session }) {
      // Get userType from query params or session
      const userType = session?.userType || "talent"; // default to talent if not specified

      if (account) {
        // This is the initial sign in
        token.userType = userType;
        token.accessToken = account.access_token;
        token.id_token = account.id_token; // Store the ID token

        // Pass the ID token to your backend
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${account.id_token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ userType: userType }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            token.backendToken = data.authToken;
          } else {
            console.error("Backend auth failed:", await response.text());
          }
        } catch (error) {
          console.error("Error authenticating with backend:", error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      // Transfer necessary data from token to session
      session.userType = token.userType;
      session.authToken = token.backendToken;
      session.id_token = token.id_token; // Make ID token available in session
      return session;
    },
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        // You can add additional conditions for sign-in if needed
        return profile.email_verified;
      }
      return true; // Allow sign in
    },
  },
  events: {
    async signIn(message) {
      // Triggered on successful sign in
      console.log("Sign in successful:", message);
    },
    async signOut(message) {
      // Triggered on sign out
      console.log("Sign out successful:", message);
    },
    async error(message) {
      // Triggered on error
      console.error("NextAuth error:", message);
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page (if you have one)
    error: "/auth/error", // Error page
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
