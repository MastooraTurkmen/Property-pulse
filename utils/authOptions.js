import connectDB from '@/config/database'
import User from '@/models/User'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRECT,
            authorization: {
                params: 'consent',
                access_type: "offline",
                response_type: 'code',
            }
        })
    ],
    callbacks: {
        async signIn({ profile }) {
            await connectDB()
            const useExists = await User.findOne({
                email: profile.email
            })
            if (!useExists) {
                const username = profile.name.slice(0, 20)
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture
                })
            }
            return true;

        },
        async session({ session }) {
            const user = await User.findOne({ email: session.user })
            session.user.id = user._id.toString();
            return session;
        }
    }
}