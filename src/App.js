import TelaMenu from "./telasCadasto/TelaMenu";
import Tela404 from "./telasCadasto/Tela404";
import TelaCadastroUsuario from "./telasCadasto/TelaCadastroUsuario";
import TelaMensagem from "./telasCadasto/TelaMensagem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";//componente
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/usuario" element={<TelaCadastroUsuario />} />
              <Route path="/mensagem" element={<TelaMensagem />} />
              <Route path="/" element={<TelaMenu />} />
              <Route path="*" element={<Tela404 />} />
            </Routes>
          </BrowserRouter>
        <ToastContainer/>
      </Provider>
    </div>
  );
}

export default App;
