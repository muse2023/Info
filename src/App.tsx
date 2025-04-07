import React from 'react';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { urls } from './config/urls';

function App() {
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            欢迎访问
          </h1>
          <p className="text-lg text-gray-600">
            选择以下选项继续
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* 最新网址 */}
          <button 
            onClick={() => handleClick(urls.latestUrl)}
            className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="p-3 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <ExternalLink className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">最新网址</h2>
              <p className="text-gray-600 text-center text-sm">
                获取最新可用地址
              </p>
            </div>
          </button>

          {/* 订阅转换 */}
          <button 
            onClick={() => handleClick(urls.subscriptionConverter)}
            className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="p-3 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <RefreshCw className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">订阅转换</h2>
              <p className="text-gray-600 text-center text-sm">
                转换订阅链接格式
              </p>
            </div>
          </button>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          © 2024 All Rights Reserved
        </footer>
      </div>
    </div>
  );
}

export default App;