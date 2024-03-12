import Navbar from '../../components/Navbar/Navbar';
import Account from '../../components/Account/Account';
import HeaderAccount from '../../components/HeaderAccount/HeaderAccount';
import Footer from '../../components/Footer/Footer';
import { dataUserAccount } from '../../Data/dataUserAccount'; 


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <main className="main bg-dark">
      <HeaderAccount name="Tony Jarvis" />
        {dataUserAccount.map((account) => (
          <Account key={account.id} title={account.title} amount={account.amount} description={account.amountDesc} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

