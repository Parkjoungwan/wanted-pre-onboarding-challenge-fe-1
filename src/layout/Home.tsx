import { useEffect } from 'react';



export default function Home() {
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const rtoken = sessionStorage.getItem('rtoken');
        if (token || rtoken) {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('rtoken');
        }
    }, [])

    return (
        <div>home</div>
    )
}