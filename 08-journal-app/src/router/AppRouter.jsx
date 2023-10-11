import { Route, Routes } from "react-router-dom";
import { JournalApp } from "../JournalApp";
import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
        <Route>
            {/* Login */}
            <Route path="/auth/*" element={ <AuthRoutes/> } />

            {/* Journal App */}
            <Route path="/*" element={ <JournalRoutes/> } />
        </Route>
    </Routes>
  )
}
