import { Container } from '../../styles/global';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default ({ children }) => {
  return(
    <div>
      <div>
        <Header />
      </div>
      <div>
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
