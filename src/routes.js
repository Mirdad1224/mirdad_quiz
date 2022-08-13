import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Quiz from "./pages/Quiz/Quiz";
import UserScore from "./pages/UserScore/UserScore";


const routes = [
    {path: '/', element: <Home />},
    {path: 'quiz', element: <Quiz />},
    {path: 'score', element: <UserScore />},
    {path: '*', element: <NotFound />},
]

export default routes;