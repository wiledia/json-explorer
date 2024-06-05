import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

import { getJsonValueByPath } from './utils/helper';
import { Input, JsonView, Label } from './components';

interface JsonExplorerProps {
  json: Record<string, any>;
}

const JsonExplorer = ({ json }: JsonExplorerProps) => {
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [value, setValue] = useState<any>(undefined);

  useEffect(() => {
    setValue(getJsonValueByPath(json, selectedPath));
  }, [json, selectedPath]);

  return (
    <>
      <div className="mb-8 flex w-full items-end justify-start gap-3">
        <div className="w-1/2">
          <Label>Path</Label>
          <Input value={selectedPath} placeholder="Enter path" onChange={e => setSelectedPath(e.target.value)} />
        </div>
        <span className="py-2 text-2xl font-semibold text-gray-400">&rarr;</span>
        <div className="w-1/2">
          <Label>Value</Label>
          <div
            className={clsx(
              'truncate rounded-2xl border px-4 py-2 font-mono',
              selectedPath.length === 0
                ? 'border-gray-300'
                : value === undefined
                  ? 'border-yellow-500'
                  : 'border-green-500'
            )}
          >
            {value !== undefined
              ? JSON.stringify(value)
              : selectedPath.length === 0
                ? 'No path given'
                : 'No value found for given path'}
          </div>
        </div>
      </div>
      <Label>JSON</Label>
      <JsonView json={json} selectedPath={selectedPath} onKeyClick={path => setSelectedPath(path)} />
    </>
  );
};

export default JsonExplorer;
