import { clsx } from 'clsx';
import { ReactElement } from 'react';

interface JsonViewProps {
  json: Record<string, any>;
  selectedPath?: string;
  onKeyClick?: (path: string) => void;
}

export const JsonView = ({ json, selectedPath, onKeyClick }: JsonViewProps) => {
  const renderFormattedJson = (json: Record<string, any> | any[], path: string = ''): ReactElement => {
    const isArray: boolean = Array.isArray(json);

    return (
      <>
        {isArray ? '[' : '{'}

        {Object.entries(json).map(([key, value], index) => {
          const currentPath: string = path === '' ? key : isArray ? `${path}[${key}]` : `${path}.${key}`;
          const isLastElement: boolean = index === Object.entries(json).length - 1;
          const element: string | ReactElement =
            typeof value === 'object' && value !== null
              ? renderFormattedJson(value, currentPath)
              : JSON.stringify(value);

          return (
            <div key={key} className="ml-6">
              <div
                className={clsx('-mx-3 inline rounded-xl px-3 py-1.5', selectedPath === currentPath && 'bg-gray-200')}
              >
                {!isArray && (
                  <>
                    <span
                      className="cursor-pointer text-blue-600 hover:underline"
                      onClick={() => onKeyClick && onKeyClick(currentPath)}
                    >
                      {key}
                    </span>
                    {': '}
                  </>
                )}
                <span
                  className={clsx(
                    typeof value === 'string' && 'text-pink-600',
                    typeof value !== 'object' && value !== null && 'text-green-700'
                  )}
                >
                  {element}
                </span>
                {!isLastElement && ','}
              </div>
            </div>
          );
        })}

        {isArray ? ']' : '}'}
      </>
    );
  };

  return (
    <div className="rounded-2xl border border-gray-300 bg-gray-100 p-4 font-mono">{renderFormattedJson(json)}</div>
  );
};
