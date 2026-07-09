

import { ReactNode ,FC} from "react";

interface Props {
  children: ReactNode;
}

const Container:FC<Props>=({ children })=> {
  return (
    <div className="mx-auto w-full max-w-[1720px] px-container">
      {children}
    </div>
  );
}
export default Container