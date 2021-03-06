import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default ({ children }) => {
  return(
    <div>
      <div>
        <Header />
      </div>
      <div style={{ background: '#f0f0f7' }}>
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
