import "./App.css";
import Widget from "@yourcoach/widget/dist/widget";
import "@yourcoach/widget/dist/assets/app.9aa66c.css";

const { clientId, action, clientSecret, pushToken, token } =
  window.YourCoachInit;

function App() {
  return (
    <Widget
      clientId={clientId}
      action={action}
      clientSecret={clientSecret}
      pushToken={pushToken}
      token={token}
    />
  );
}

export default App;
