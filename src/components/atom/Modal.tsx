'use Client';

interface IProps {
  show: boolean;
  close: () => void;
  children: React.ReactNode;
}

const Modal = ({ show, close, children }: IProps) => {
  if (show) {
    return (
      <div className="fixed left-0 top-0 h-full w-full">
        <div
          className="flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-75 transition-opacity"
          onMouseDown={() => close()}
        >
          <div
            className="max-w-sm rounded-sm bg-white p-2"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
