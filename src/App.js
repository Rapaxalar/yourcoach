import "./App.css";
import Widget from "@yourcoach/widget/dist/widget";
import "@yourcoach/widget/dist/assets/app.9aa66c.css";

window.YourCoachInit = {
  clientId: "happify_client_id",
  action: "login",
  clientSecret: "AM30Ox9zULYfBLQTRIcC",
  pushToken: "testtokensome2",
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjo0MX0=.dUIMOzyUdXLotFKHqH80wO7txTDVJ9j8gZmYj0OHbPszimbxW7LinwxgmBO_MNY0mfPDVYa7XVKyEOjn9nGOBDjsxz4F9226QYWwQM42PNZFtnwQoYZftzt-FUdsfZavYZ394pfC4zxxWJzmsqp_w0NkdOQtVyuwIBCC_pDbJmjV9tL_I9_-rlo1mepzfOvygXbBvlZIzzxcVnlC85TiKXZ_8prVbp3PxtnCodO7WuA2ktGAdLNni-P5WF-NSO4otYtiPpiDeIGvN_8kvw9JSVCyo34cMJjPKL8OU1dz4SuEKmciqcVc-Zr56S70v9pPD5nrRIZRE7kCPJF0TaspgA",
  containerId: "root",
};

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
