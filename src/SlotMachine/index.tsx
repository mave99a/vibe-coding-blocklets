import React, { useState, useEffect, useRef, useMemo } from 'react';

export interface BlockProps {
  /** @description id: abcdefghi1234567 | type: string | visible: true */
  title?: string;
  
  /** @description id: abcdefghi1234568 | type: number | visible: true */
  reelCount?: number;
  
  /** @description id: abcdefghi1234569 | type: number | visible: true */
  spinSpeed?: number;
  
  /** @description id: abcdefghi1234570 | type: boolean | visible: true */
  autoSpin?: boolean;
  
  /** @description id: abcdefghi1234571 | type: number | visible: true */
  symbolSize?: number;
  
  /** @description id: abcdefghi1234572 | type: color | visible: true */
  machineColor?: string;
  
  /** @description id: abcdefghi1234573 | type: color | visible: true */
  reelColor?: string;
  
  /** @description id: abcdefghi1234574 | type: color | visible: true */
  leverColor?: string;
  
  /** @description id: abcdefghi1234575 | type: array | visible: true */
  symbols?: Array<{
    /** @description id: abcdefghi1234576 | type: string | visible: true */
    symbol?: string;
    /** @description id: abcdefghi1234577 | type: number | visible: true */
    weight?: number;
    /** @description id: abcdefghi1234583 | type: string | visible: true */
    image?: string;
  }>;

  /** @description id: abcdefghi1234578 | type: array | visible: true */
  payouts?: Array<{
    /** @description id: abcdefghi1234579 | type: string | visible: true */
    symbol?: string;
    /** @description id: abcdefghi1234580 | type: number | visible: true */
    multiplier?: number;
  }>;

  /** @description id: abcdefghi1234581 | type: number | visible: true */
  winProbability?: number;
  
  /** @description id: abcdefghi1234582 | type: boolean | visible: true */
  soundEnabled?: boolean;
  
  /** @description id: abcdefghi1234584 | type: boolean | visible: true */
  allowReelLock?: boolean;
  
  /** @description id: abcdefghi1234585 | type: number | visible: true */
  initialCredits?: number;
  
  /** @description id: abcdefghi1234586 | type: number | visible: true */
  spinCost?: number;
  
  /** @description id: abcdefghi1234587 | type: boolean | visible: true */
  useImages?: boolean;
  
  /** @description id: abcdefghi1234588 | type: string | visible: true */
  locale?: string;
}

// 音效 URL - 使用在线免费音效
const SOUND_URLS = {
  leverPull: 'https://assets.mixkit.co/sfx/preview/mixkit-plastic-bubble-click-1124.mp3',
  spinning: 'https://assets.mixkit.co/sfx/preview/mixkit-roulette-spin-1924.mp3',
  reelStop: 'https://assets.mixkit.co/sfx/preview/mixkit-game-ball-tap-2073.mp3',
  win: 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3',
  jackpot: 'https://assets.mixkit.co/sfx/preview/mixkit-casino-reward-1980.mp3',
  insertCoin: 'https://freesound.org/data/previews/276/276091_5123851-lq.mp3',
  lockReel: 'https://freesound.org/data/previews/56/56246_91374-lq.mp3'
};

// Localized texts
const LOCALIZED_TEXTS = {
  en: {
    spinButton: 'Spin (Space)',
    spinning: 'Spinning...',
    takeWinButton: 'Take Win (W)',
    credits: 'Credits',
    totalSpent: 'Total Spent:',
    win: 'Win',
    reelLockTip: 'Tip: Click on reels or press number keys (1,2,3...) to lock a reel',
    winningRule: 'Winning rule: Win when all symbols in a row match',
    muteSoundTitle: 'Mute Sound',
    enableSoundTitle: 'Enable Sound',
    pullToSpin: 'Pull to spin',
    addCredit: 'Add Credit (C)'
  },
  zh: {
    spinButton: '旋转 (空格键)',
    spinning: '旋转中...',
    takeWinButton: '收取奖励 (W键)',
    credits: '筹码',
    totalSpent: '总消费:',
    win: '赢取',
    reelLockTip: '提示: 点击转轮或按下对应数字键 (1,2,3...) 可以锁定该转轮',
    winningRule: '中奖规则: 一行中所有图案相同时中奖',
    muteSoundTitle: '关闭声音',
    enableSoundTitle: '开启声音',
    pullToSpin: '拉动旋转',
    addCredit: '添加筹码 (C键)'
  }
};

// Default symbols if none provided
const defaultSymbols = [
  { 
    symbol: '🍒', 
    weight: 10, 
    image: 'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Cherry-512.png' 
  },
  { 
    symbol: '🍊', 
    weight: 8, 
    image: 'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Orange-512.png' 
  },
  { 
    symbol: '🍋', 
    weight: 8, 
    image: 'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Lemon-512.png' 
  },
  { 
    symbol: '🍇', 
    weight: 6, 
    image: 'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Grapes-512.png' 
  },
  { 
    symbol: '🍉', 
    weight: 5, 
    image: 'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png' 
  },
  { 
    symbol: '🍓', 
    weight: 4, 
    image: 'https://cdn4.iconfinder.com/data/icons/fruits-and-berries-4/154/strawberry-berry-fruit-512.png' 
  },
  { 
    symbol: '🥝', 
    weight: 3, 
    image: 'https://cdn4.iconfinder.com/data/icons/fruits-and-berries-4/128/kiwi-fruit-healthy-diet-512.png' 
  },
  { 
    symbol: '💎', 
    weight: 2, 
    image: 'https://cdn2.iconfinder.com/data/icons/gambling-44/64/16_diamond_gambling_casino_game_gaming-512.png' 
  },
  { 
    symbol: '7️⃣', 
    weight: 1, 
    image: 'https://cdn2.iconfinder.com/data/icons/casino-gambling-14/512/Number_Seven_7-512.png' 
  },
];

// Default payouts if none provided
const defaultPayouts = [
  { symbol: '🍒', multiplier: 2 },
  { symbol: '🍊', multiplier: 3 },
  { symbol: '🍋', multiplier: 3 },
  { symbol: '🍇', multiplier: 5 },
  { symbol: '🍉', multiplier: 7 },
  { symbol: '🍓', multiplier: 10 },
  { symbol: '🥝', multiplier: 15 },
  { symbol: '💎', multiplier: 30 },
  { symbol: '7️⃣', multiplier: 50 },
];

// Function to select a random symbol based on weight
const selectRandomSymbol = (symbols: Array<{ symbol?: string; weight?: number; image?: string }>) => {
  const totalWeight = symbols.reduce((sum, item) => sum + (item.weight || 1), 0);
  let random = Math.random() * totalWeight;
  
  for (const item of symbols) {
    random -= (item.weight || 1);
    if (random <= 0) {
      return item;
    }
  }
  
  return symbols[0] || { symbol: '🎰' }; // Fallback with safety check
};

// Function to select a random symbol, potentially biased toward matching
const selectPotentialMatchingSymbol = (
  symbols: Array<{ symbol?: string; weight?: number; image?: string }>,
  firstSymbol: string | undefined,
  winProbability: number
) => {
  // Determine if this reel should match the first reel based on probability
  // higher winProbability means higher chance of matching
  const shouldMatch = Math.random() < (1 / (winProbability * 0.8));
  
  if (shouldMatch && firstSymbol) {
    return symbols.find(s => s.symbol === firstSymbol) || selectRandomSymbol(symbols);
  } else {
    return selectRandomSymbol(symbols);
  }
};

// Helper function to play sound
const playSound = (audioRef: React.RefObject<HTMLAudioElement>, soundEnabled: boolean) => {
  if (soundEnabled && audioRef.current) {
    // Reset the audio to start
    audioRef.current.currentTime = 0;
    // Play the sound
    audioRef.current.play().catch(err => {
      // Handle any autoplay restrictions
      console.warn('Unable to play audio:', err);
    });
  }
};

// 单个转轮组件
const Reel = ({ 
  symbols, 
  spinning, 
  spinDuration, 
  reelIndex, 
  symbolSize, 
  locked, 
  toggleLock, 
  allowLock, 
  useImages, 
  onSpinComplete, 
  soundEnabled,
  spinReelStopAudioRef
}: {
  symbols: Array<{ symbol?: string; weight?: number; image?: string }>;
  spinning: boolean;
  spinDuration: number;
  reelIndex: number;
  symbolSize: number;
  locked: boolean;
  toggleLock: () => void;
  allowLock: boolean;
  useImages: boolean;
  onSpinComplete: (result: { symbol?: string; weight?: number; image?: string }) => void;
  soundEnabled: boolean;
  spinReelStopAudioRef: React.RefObject<HTMLAudioElement>;
}) => {
  const [visibleSymbols, setVisibleSymbols] = useState<Array<{ symbol?: string; weight?: number; image?: string }>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef<number | null>(null);
  const spinTimerRef = useRef<NodeJS.Timeout | null>(null);
  const spinCountRef = useRef(0);
  const reelRef = useRef<HTMLDivElement>(null);
  
  // 初始化转轮符号
  useEffect(() => {
    const initialSymbols: Array<{ symbol?: string; weight?: number; image?: string }> = [];
    for (let i = 0; i < 5; i++) {
      // 确保至少有一个默认符号
      const randomSymbol = selectRandomSymbol(symbols.length > 0 ? symbols : [{ symbol: '🎰', weight: 1 }]);
      initialSymbols.push(randomSymbol);
    }
    setVisibleSymbols(initialSymbols);
  }, [symbols]);
  
  // 处理旋转
  useEffect(() => {
    if (spinning && !locked) {
      // 开始旋转
      startSpin();
      
      // 设置旋转时间（不同的转轮停止时间不同，形成瀑布效果）
      const spinTime = spinDuration + (reelIndex * 600);
      
      spinTimerRef.current = setTimeout(() => {
        stopSpin();
      }, spinTime);
    }
    
    return () => {
      // 清理
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (spinTimerRef.current) {
        clearTimeout(spinTimerRef.current);
      }
    };
  }, [spinning, locked, reelIndex, spinDuration]);
  
  const startSpin = () => {
    spinCountRef.current = 0;
    const animate = () => {
      // 每4帧更新一次符号位置
      if (spinCountRef.current % 4 === 0) {
        setVisibleSymbols(prev => {
          const newSymbols = [...prev];
          // 添加一个新符号，确保至少有一个默认符号
          newSymbols.unshift(selectRandomSymbol(symbols.length > 0 ? symbols : [{ symbol: '🎰', weight: 1 }]));
          // 移除最后一个
          newSymbols.pop();
          return newSymbols;
        });
      }
      
      spinCountRef.current++;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };
  
  const stopSpin = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    
    // 播放停止音效
    playSound(spinReelStopAudioRef, soundEnabled);
    
    // 返回结果（中间位置的符号）
    if (visibleSymbols.length >= 3 && visibleSymbols[2]) {
      onSpinComplete(visibleSymbols[2]);
    } else {
      // 防御性代码，确保总是有一个有效的结果
      onSpinComplete({ symbol: '🎰', weight: 1 });
    }
  };
  
  return (
    <div 
      ref={reelRef}
      style={{
        width: `${symbolSize}px`,
        height: `${symbolSize * 3}px`,
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        overflow: 'hidden',
        position: 'relative',
        opacity: locked ? 0.8 : 1,
        transition: 'opacity 0.3s',
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.2)',
        cursor: allowLock ? 'pointer' : 'default',
      }}
      onClick={() => allowLock && toggleLock()}
    >
      {locked && (
        <div style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          zIndex: 10,
          fontSize: '16px',
        }}>
          🔒
        </div>
      )}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        transition: `transform 0.05s ease-in-out`,
      }}>
        {visibleSymbols.map((item, index) => (
          <div 
            key={`${reelIndex}-${index}-${item.symbol}`}
            style={{
              height: `${symbolSize}px`,
              width: `${symbolSize}px`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: `${symbolSize * 0.6}px`,
              backgroundColor: 'transparent',
              transition: 'background-color 0.3s',
            }}
          >
            {useImages && item.image ? (
              <img 
                src={item.image} 
                alt={item.symbol} 
                style={{ 
                  width: `${symbolSize * 0.8}px`, 
                  height: `${symbolSize * 0.8}px`,
                  objectFit: 'contain'
                }} 
              />
            ) : (
              <span>{item.symbol}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function BlockComponent({
  title = 'Slot Machine',
  reelCount = 3,
  spinSpeed = 300,
  autoSpin = false,
  symbolSize = 80,
  machineColor = '#e74c3c',
  reelColor = '#f8f9fa',
  leverColor = '#f1c40f',
  symbols = defaultSymbols,
  payouts = defaultPayouts,
  winProbability = 10, // Default 1/10 chance (10%)
  soundEnabled = true,
  allowReelLock = true,
  initialCredits = 10,
  spinCost = 1,
  useImages = false,
  locale = 'en',
}: BlockProps) {
  // Get localized texts based on locale, fallback to English
  const texts = LOCALIZED_TEXTS[locale as keyof typeof LOCALIZED_TEXTS] || LOCALIZED_TEXTS.en;
  
  // Clamp reel count between 3 and 5
  const actualReelCount = Math.min(Math.max(reelCount, 3), 5);
  
  // 状态管理
  const [spinning, setSpinning] = useState(false);
  const [reelLocked, setReelLocked] = useState(Array(actualReelCount).fill(false));
  const [results, setResults] = useState<Array<{ symbol?: string; weight?: number; image?: string }>>([]);
  const [credits, setCredits] = useState(initialCredits);
  const [winAmount, setWinAmount] = useState(0);
  const [totalSpentCredits, setTotalSpentCredits] = useState(0);
  const [win, setWin] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(soundEnabled);
  const [currentReelResults, setCurrentReelResults] = useState<Array<{ symbol?: string; weight?: number; image?: string } | null>>(Array(actualReelCount).fill(null));
  
  // 音频引用
  const leverPullAudioRef = useRef<HTMLAudioElement>(null);
  const spinningAudioRef = useRef<HTMLAudioElement>(null);
  const reelStopAudioRef = useRef<HTMLAudioElement>(null);
  const winAudioRef = useRef<HTMLAudioElement>(null);
  const jackpotAudioRef = useRef<HTMLAudioElement>(null);
  const insertCoinAudioRef = useRef<HTMLAudioElement>(null);
  const lockReelAudioRef = useRef<HTMLAudioElement>(null);
  
  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 空格键旋转
      if (e.code === 'Space') {
        e.preventDefault();
        handleSpin();
      }
      
      // 数字键锁定转轮
      if (allowReelLock && e.code.startsWith('Digit')) {
        const reelIndex = parseInt(e.code.slice(-1)) - 1;
        if (reelIndex >= 0 && reelIndex < actualReelCount) {
          toggleReelLock(reelIndex);
        }
      }
      
      // C键添加筹码
      if (e.code === 'KeyC') {
        addCredits();
      }
      
      // W键收取奖励
      if (e.code === 'KeyW') {
        collectWinnings();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.addEventListener('keydown', handleKeyDown);
    };
  }, [allowReelLock, spinning, actualReelCount, winAmount]);
  
  // Update sound enabled state if prop changes
  useEffect(() => {
    setIsSoundOn(soundEnabled);
  }, [soundEnabled]);
  
  // Auto-spin functionality
  useEffect(() => {
    let autoSpinTimer: NodeJS.Timeout;
    if (autoSpin && !spinning && credits >= spinCost) {
      autoSpinTimer = setTimeout(() => {
        handleSpin();
      }, 3000);
    }
    return () => {
      if (autoSpinTimer) clearTimeout(autoSpinTimer);
    };
  }, [autoSpin, spinning, credits, spinCost]);
  
  // 处理旋转
  const handleSpin = () => {
    if (spinning || credits < spinCost) return;
    
    // 扣除筹码
    setCredits(prevCredits => prevCredits - spinCost);
    setTotalSpentCredits(prev => prev + spinCost);
    
    // 重置状态
    setWin(false);
    setWinAmount(0);
    setSpinning(true);
    setCurrentReelResults(Array(actualReelCount).fill(null));
    
    // 播放拉杆音效
    playSound(leverPullAudioRef, isSoundOn);
    
    // 播放旋转音效
    setTimeout(() => {
      playSound(spinningAudioRef, isSoundOn);
    }, 300);
  };
  
  // 处理转轮旋转完成
  const handleReelSpinComplete = (reelIndex: number, result: { symbol?: string; weight?: number; image?: string }) => {
    // 更新当前转轮结果
    setCurrentReelResults(prev => {
      const newResults = [...prev];
      newResults[reelIndex] = result;
      
      // 检查是否所有转轮都完成旋转
      const allComplete = newResults.every(r => r !== null);
      if (allComplete) {
        // 确保没有 null 或 undefined 值
        const validResults = newResults.filter((r): r is { symbol?: string; weight?: number; image?: string } => r !== null);
        if (validResults.length === actualReelCount) {
          checkWin(validResults);
        }
        setSpinning(false);
      }
      
      return newResults;
    });
  };
  
  // 检查是否中奖
  const checkWin = (results: Array<{ symbol?: string; weight?: number; image?: string }>) => {
    // 获取所有符号
    const symbols = results.map(r => r.symbol);
    
    // 检查是否所有符号相同
    const allSame = symbols.every(s => s === symbols[0]);
    
    if (allSame) {
      // 找到符号对应的赔率
      const symbol = symbols[0];
      const payout = payouts.find(p => p.symbol === symbol);
      const multiplier = payout ? payout.multiplier || 1 : 1;
      
      // 计算获胜金额
      const amount = spinCost * multiplier;
      
      setWin(true);
      setWinAmount(amount);
      
      // 播放获胜音效
      if (multiplier >= 30) {
        playSound(jackpotAudioRef, isSoundOn);
      } else {
        playSound(winAudioRef, isSoundOn);
      }
    }
  };
  
  // 切换转轮锁定状态
  const toggleReelLock = (reelIndex: number) => {
    if (!allowReelLock || spinning) return;
    
    setReelLocked(prev => {
      const newLocked = [...prev];
      newLocked[reelIndex] = !newLocked[reelIndex];
      
      // 播放锁定音效
      if (newLocked[reelIndex]) {
        playSound(lockReelAudioRef, isSoundOn);
      }
      
      return newLocked;
    });
  };
  
  // 添加筹码
  const addCredits = () => {
    playSound(insertCoinAudioRef, isSoundOn);
    setCredits(prev => prev + 1);
  };
  
  // 收取奖励
  const collectWinnings = () => {
    if (winAmount > 0) {
      setCredits(prev => prev + winAmount);
      setWinAmount(0);
      setWin(false);
    }
  };
  
  // 切换声音开关
  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };
  
  // 计算容器宽度
  const containerWidth = actualReelCount * (symbolSize + 20) + 100; // 额外空间给拉杆
  
  // 样式
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '20px',
    maxWidth: `${containerWidth}px`,
    margin: '0 auto',
  };
  
  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    marginBottom: '20px',
    color: '#333',
  };
  
  const machineStyle = {
    backgroundColor: machineColor,
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    position: 'relative' as const,
  };
  
  const reelsContainerStyle = {
    display: 'flex',
    background: '#333',
    borderRadius: '10px',
    padding: '15px',
    gap: '10px',
    position: 'relative' as const,
  };
  
  const paylineStyle = {
    position: 'absolute' as const,
    top: '50%',
    height: '2px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    zIndex: 5,
  };
  
  const leverContainerStyle = {
    position: 'absolute' as const,
    right: '-60px',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '120px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  };
  
  const leverBaseStyle = {
    width: '30px',
    height: '20px',
    backgroundColor: '#888',
    borderRadius: '5px',
  };
  
  const leverStyle = {
    width: '15px',
    height: '80px',
    backgroundColor: leverColor,
    borderRadius: '10px',
    cursor: 'pointer',
    transform: spinning ? 'rotate(20deg)' : 'rotate(0deg)',
    transformOrigin: 'top center',
    transition: 'transform 0.2s',
  };
  
  const leverBallStyle = {
    width: '25px',
    height: '25px',
    backgroundColor: '#d35400',
    borderRadius: '50%',
  };
  
  const statsContainerStyle = {
    marginTop: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: '10px',
    borderRadius: '5px',
  };
  
  const statItemStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
  };
  
  const statTitleStyle = {
    fontSize: '12px',
    color: '#999',
  };
  
  const statValueStyle = (isWin: boolean) => ({
    padding: '5px 10px',
    backgroundColor: isWin ? 'rgba(255, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.3)',
    borderRadius: '3px',
    fontSize: '20px',
    textAlign: 'right' as const,
    color: isWin ? '#ff5555' : '#55ff55',
    marginTop: '5px',
  });
  
  const statSubStyle = {
    fontSize: '10px',
    color: '#666',
    textAlign: 'right' as const,
    marginTop: '3px',
  };
  
  const actionsContainerStyle = {
    marginTop: '15px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#222',
    borderRadius: '5px',
  };
  
  const buttonStyle = (isWin: boolean, hasWin: boolean) => ({
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    backgroundColor: isWin 
      ? (hasWin ? 'rgba(255, 0, 0, 0.9)' : 'rgba(255, 0, 0, 0.4)') 
      : 'rgba(0, 255, 0, 0.4)',
    color: '#fff',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.2s',
  });
  
  const coinButtonStyle = {
    width: '30px',
    height: '50px',
    backgroundColor: '#555',
    borderRadius: '5px',
    border: '2px solid #777',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  };
  
  const soundButtonStyle = {
    position: 'absolute' as const,
    top: '10px',
    right: '10px',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    cursor: 'pointer',
    fontSize: '18px',
    border: 'none',
    outline: 'none',
    color: '#333',
  };
  
  const instructionsStyle = {
    marginTop: '15px',
    fontSize: '12px',
    color: '#777',
    textAlign: 'center' as const,
  };
  
  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      
      <div style={machineStyle}>
        <button 
          style={soundButtonStyle}
          onClick={toggleSound}
          title={isSoundOn ? texts.muteSoundTitle : texts.enableSoundTitle}
        >
          {isSoundOn ? '🔊' : '🔇'}
        </button>
        
        <div style={reelsContainerStyle}>
          <div style={paylineStyle}></div>
          
          {Array.from({ length: actualReelCount }).map((_, index) => (
            <Reel
              key={index}
              symbols={symbols}
              spinning={spinning}
              spinDuration={spinSpeed * 10}
              reelIndex={index}
              symbolSize={symbolSize}
              locked={reelLocked[index]}
              toggleLock={() => toggleReelLock(index)}
              allowLock={allowReelLock}
              useImages={useImages}
              onSpinComplete={(result) => handleReelSpinComplete(index, result)}
              soundEnabled={isSoundOn}
              spinReelStopAudioRef={reelStopAudioRef}
            />
          ))}
        </div>
        
        <div style={leverContainerStyle}>
          <div style={leverBaseStyle}></div>
          <div 
            style={leverStyle} 
            onClick={handleSpin}
            title={texts.pullToSpin}
          ></div>
          <div style={leverBallStyle}></div>
        </div>
      </div>
      
      <div style={statsContainerStyle}>
        <div style={coinButtonStyle} onClick={addCredits} title={texts.addCredit}>
          💰
        </div>
        
        <div style={statItemStyle}>
          <div style={statTitleStyle}>{texts.credits}</div>
          <div style={statValueStyle(false)}>
            {credits.toFixed(1)}
          </div>
          <div style={statSubStyle}>
            {texts.totalSpent} {totalSpentCredits.toFixed(1)}
          </div>
        </div>
        
        <div style={statItemStyle}>
          <div style={statTitleStyle}>{texts.win}</div>
          <div style={statValueStyle(true)}>
            {winAmount.toFixed(1)}
          </div>
        </div>
      </div>
      
      <div style={actionsContainerStyle}>
        <button 
          style={buttonStyle(false, false)} 
          onClick={handleSpin}
          disabled={spinning || credits < spinCost}
        >
          {spinning ? texts.spinning : texts.spinButton}
        </button>
        
        <button 
          style={buttonStyle(true, winAmount > 0)} 
          onClick={collectWinnings}
          disabled={winAmount <= 0}
        >
          {texts.takeWinButton}
        </button>
      </div>
      
      {allowReelLock && (
        <div style={instructionsStyle}>
          {texts.reelLockTip}
        </div>
      )}
      
      <div style={instructionsStyle}>
        {texts.winningRule}
      </div>
      
      {/* 隐藏的音频元素 */}
      <audio ref={leverPullAudioRef} src={SOUND_URLS.leverPull} preload="auto" />
      <audio ref={spinningAudioRef} src={SOUND_URLS.spinning} preload="auto" />
      <audio ref={reelStopAudioRef} src={SOUND_URLS.reelStop} preload="auto" />
      <audio ref={winAudioRef} src={SOUND_URLS.win} preload="auto" />
      <audio ref={jackpotAudioRef} src={SOUND_URLS.jackpot} preload="auto" />
      <audio ref={insertCoinAudioRef} src={SOUND_URLS.insertCoin} preload="auto" />
      <audio ref={lockReelAudioRef} src={SOUND_URLS.lockReel} preload="auto" />
    </div>
  );
} 