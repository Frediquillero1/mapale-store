import { getCurrentSession } from '@/actions/auth';
import { getAllProducts } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const Home = async () => {
  const { user } = await getCurrentSession();

  return (
    <div>
      HOME
    </div>
        
  );
};

export default Home;
