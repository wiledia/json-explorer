import JsonExplorer from './JsonExplorer';

import DemoData from './demo-data.json';

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full p-8 md:w-3/4 xl:w-1/2">
        <div className="mb-8 text-2xl font-black">JSON Explorer</div>
        <JsonExplorer json={DemoData} />
      </div>
    </div>
  );
}

export default App;
