import { Session } from 'next-auth';

interface MyContext {
  session: Session | null;
}

export default MyContext;
