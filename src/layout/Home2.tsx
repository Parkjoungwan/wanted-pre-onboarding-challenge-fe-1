import { useNavigate } from "react-router-dom";

export default function Home2() {
    const navi = useNavigate();
    navi("/auth");
    return (
        <div>needToLogin</div>
    );
}