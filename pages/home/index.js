import { useEffect } from "react";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function Login(){
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if(status !== "authenticated") {
            router.push('/')
        }
    }, [status])

    return (
        <Layout>
            <Container>
                Welcome
            </Container>
            
        </Layout>
    )
}