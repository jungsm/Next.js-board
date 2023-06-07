import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'be36417622a45b0237c8',
      clientSecret: '8607654a5dc98a9386a6ebdebf1051053f454eb8',
    }),
  ],
  secret : '13rkdhfl'
};
export default NextAuth(authOptions); 