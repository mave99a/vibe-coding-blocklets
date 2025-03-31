import React, { useState } from 'react';
import SlotMachine from '../index';

const VueSlotMachineExample = () => {
  const [currentLocale, setCurrentLocale] = useState('zh');
  
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>SlotMachine Vue 样式示例</h1>
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button 
          onClick={() => setCurrentLocale('zh')} 
          style={{ 
            padding: '8px 16px', 
            margin: '0 10px', 
            background: currentLocale === 'zh' ? '#4CAF50' : '#f1f1f1',
            color: currentLocale === 'zh' ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          中文
        </button>
        <button 
          onClick={() => setCurrentLocale('en')} 
          style={{ 
            padding: '8px 16px', 
            margin: '0 10px', 
            background: currentLocale === 'en' ? '#4CAF50' : '#f1f1f1',
            color: currentLocale === 'en' ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          English
        </button>
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>基础老虎机</h2>
        <SlotMachine 
          title="基础老虎机" 
          reelCount={3}
          initialCredits={20}
          allowReelLock={true}
          locale={currentLocale}
        />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>图片符号老虎机</h2>
        <SlotMachine 
          title="图片符号老虎机" 
          reelCount={3}
          useImages={true}
          initialCredits={50}
          spinCost={5}
          machineColor="#2c3e50"
          leverColor="#e67e22"
          locale={currentLocale}
        />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>奢华版老虎机（5转轮）</h2>
        <SlotMachine 
          title="奢华版老虎机" 
          reelCount={5}
          symbolSize={60}
          initialCredits={100}
          spinCost={10}
          winProbability={20}
          machineColor="#8e44ad"
          leverColor="#f1c40f"
          allowReelLock={true}
          locale={currentLocale}
        />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>自动旋转老虎机</h2>
        <SlotMachine 
          title="自动旋转老虎机" 
          reelCount={3}
          autoSpin={true}
          initialCredits={30}
          spinCost={2}
          machineColor="#c0392b"
          locale={currentLocale}
        />
      </div>
      
      <div>
        <h3>{currentLocale === 'zh' ? '使用指南：' : 'User Guide:'}</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li><strong>{currentLocale === 'zh' ? '空格键' : 'Space Bar'}</strong>：{currentLocale === 'zh' ? '启动旋转' : 'Start spin'}</li>
          <li><strong>{currentLocale === 'zh' ? '数字键 1-5' : 'Number Keys 1-5'}</strong>：{currentLocale === 'zh' ? '锁定/解锁对应的转轮' : 'Lock/unlock the corresponding reel'}</li>
          <li><strong>C {currentLocale === 'zh' ? '键' : 'Key'}</strong>：{currentLocale === 'zh' ? '添加筹码' : 'Add chips'}</li>
          <li><strong>W {currentLocale === 'zh' ? '键' : 'Key'}</strong>：{currentLocale === 'zh' ? '收集赢取的筹码' : 'Collect winnings'}</li>
          <li>{currentLocale === 'zh' ? '点击转轮可以锁定该转轮，防止下次旋转时改变' : 'Click on a reel to lock it, preventing it from changing in the next spin'}</li>
          <li>{currentLocale === 'zh' ? '点击"Take Win"按钮可以将赢取的筹码添加到您的余额中' : 'Click the "Take Win" button to add your winnings to your balance'}</li>
        </ul>
      </div>
    </div>
  );
};

export default VueSlotMachineExample; 