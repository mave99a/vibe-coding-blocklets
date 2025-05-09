import React, { useEffect, useState, useMemo } from 'react';

export interface BlockProps {
  /** @description id: abcdef1234567890 | type: string | visible: true */
  title?: string;
  /** @description id: bcdef1234567891a | type: boolean | visible: true */
  showTitle?: boolean;
  /** @description id: cdef1234567891ab | type: color | visible: true */
  digitColor?: string;
  /** @description id: def1234567891abc | type: color | visible: true */
  backgroundColor?: string;
  /** @description id: ef1234567891abcd | type: string | visible: false */
  timezone?: string;
  /** @description id: f1234567891abcde | type: boolean | visible: true */
  showSeconds?: boolean;
  /** @description id: g1234567891abcdf | type: boolean | visible: true */
  use24HourFormat?: boolean;
  /** @description id: h1234567891abcdg | type: number | visible: true */
  size?: number;
  /** @description id: i1234567891abcdh | type: number | visible: true */
  segmentThickness?: number;
}

// 七段显示数字的段定义（哪些段应该亮起）
const SEGMENTS = {
  0: [true, true, true, false, true, true, true],
  1: [false, false, true, false, false, true, false],
  2: [true, false, true, true, true, false, true],
  3: [true, false, true, true, false, true, true],
  4: [false, true, true, true, false, true, false],
  5: [true, true, false, true, false, true, true],
  6: [true, true, false, true, true, true, true],
  7: [true, false, true, false, false, true, false],
  8: [true, true, true, true, true, true, true],
  9: [true, true, true, true, false, true, true],
  // Special characters
  ':': [],
  ' ': [],
  'A': [true, true, true, true, true, true, false],
  'P': [true, true, true, true, true, false, false],
  'M': [true, true, true, false, true, true, false]
};

// 七段显示数字中每个段的路径定义
const getSegmentPaths = (size = 20, thickness = 3) => {
  const width = size * 0.6;
  const height = size;
  const halfThick = thickness / 2;
  
  // 返回每个段的SVG路径
  return [
    // Segment A (top horizontal)
    `M ${halfThick},${halfThick} L ${width - halfThick},${halfThick} L ${width - thickness},${thickness} L ${thickness},${thickness} Z`,
    
    // Segment B (top left vertical)
    `M ${halfThick},${halfThick} L ${thickness},${thickness} L ${thickness},${height/2 - halfThick} L ${halfThick},${height/2 - thickness} Z`,
    
    // Segment C (top right vertical)
    `M ${width - halfThick},${halfThick} L ${width - thickness},${thickness} L ${width - thickness},${height/2 - halfThick} L ${width - halfThick},${height/2 - thickness} Z`,
    
    // Segment D (middle horizontal)
    `M ${halfThick},${height/2} L ${thickness},${height/2 - halfThick} L ${width - thickness},${height/2 - halfThick} L ${width - halfThick},${height/2} L ${width - thickness},${height/2 + halfThick} L ${thickness},${height/2 + halfThick} Z`,
    
    // Segment E (bottom left vertical)
    `M ${halfThick},${height - halfThick} L ${thickness},${height - thickness} L ${thickness},${height/2 + halfThick} L ${halfThick},${height/2 + thickness} Z`,
    
    // Segment F (bottom right vertical)
    `M ${width - halfThick},${height - halfThick} L ${width - thickness},${height - thickness} L ${width - thickness},${height/2 + halfThick} L ${width - halfThick},${height/2 + thickness} Z`,
    
    // Segment G (bottom horizontal)
    `M ${halfThick},${height - halfThick} L ${width - halfThick},${height - halfThick} L ${width - thickness},${height - thickness} L ${thickness},${height - thickness} Z`,
  ];
};

// 冒号分隔符的SVG定义
const renderColon = (x: number, y: number, size: number, color: string) => {
  const dotRadius = size * 0.06;
  const gapY = size * 0.3;
  
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle 
        cx={dotRadius} 
        cy={size * 0.35} 
        r={dotRadius} 
        fill={color} 
      />
      <circle 
        cx={dotRadius} 
        cy={size * 0.35 + gapY} 
        r={dotRadius} 
        fill={color} 
      />
    </g>
  );
};

// 渲染单个数字
const renderDigit = (digit: string, x: number, y: number, size: number, thickness: number, color: string) => {
  // 获取数字对应的七段显示定义
  const segmentStates = SEGMENTS[digit as keyof typeof SEGMENTS] || [];
  const segmentPaths = getSegmentPaths(size, thickness);
  
  // 特殊字符处理
  if (digit === ':') {
    return renderColon(x, y, size, color);
  }
  
  if (digit === ' ' || !segmentStates.length) {
    return null;
  }
  
  return (
    <g transform={`translate(${x}, ${y})`}>
      {segmentPaths.map((path, index) => (
        <path
          key={index}
          d={path}
          fill={segmentStates[index] ? color : 'transparent'}
          opacity={segmentStates[index] ? 1 : 0.1}
        />
      ))}
    </g>
  );
};

export default function BlockComponent({
  title = 'LED Clock',
  showTitle = true,
  digitColor = 'rgb(255, 0, 0)',
  backgroundColor = 'rgb(0, 0, 0)',
  timezone = 'America/New_York',
  showSeconds = true,
  use24HourFormat = true,
  size = 48,
  segmentThickness = 6,
}: BlockProps) {
  const [currentTime, setCurrentTime] = useState('');
  const [mounted, setMounted] = useState(false);

  // 格式化当前时间为LED显示所需的字符串
  const formatTime = (date: Date, use24Hour: boolean, includeSecs: boolean) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    let period = '';
    
    if (!use24Hour) {
      period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours === 0 ? 12 : hours; // 12小时制中0点显示为12
    }
    
    const hoursStr = hours.toString().padStart(2, '0');
    
    return includeSecs 
      ? `${hoursStr}:${minutes}:${seconds}${use24Hour ? '' : ' ' + period}`
      : `${hoursStr}:${minutes}${use24Hour ? '' : ' ' + period}`;
  };

  // 获取当前时间的格式模板，用于宽度计算
  const getTimeFormatTemplate = (use24Hour: boolean, includeSecs: boolean) => {
    if (use24Hour) {
      return includeSecs ? 'HH:MM:SS' : 'HH:MM';
    } else {
      return includeSecs ? 'HH:MM:SS AM' : 'HH:MM AM';
    }
  };

  // 计算数字显示区域的总宽度
  const clockWidth = useMemo(() => {
    const digitWidth = size * 0.6;
    const digitGap = size * 0.2;
    const timeFormat = getTimeFormatTemplate(!!use24HourFormat, !!showSeconds);
    
    // 计算所有字符的总宽度
    return timeFormat.length * digitWidth + (timeFormat.length - 1) * digitGap;
  }, [size, showSeconds, use24HourFormat]);

  // 设置定时器更新时间
  useEffect(() => {
    setMounted(true);
    
    const updateTime = () => {
      try {
        // 使用指定时区创建日期对象
        const date = new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));
        setCurrentTime(formatTime(date, !!use24HourFormat, !!showSeconds));
      } catch (error) {
        // 如果时区无效，使用本地时区
        console.error('Invalid timezone:', error);
        const date = new Date();
        setCurrentTime(formatTime(date, !!use24HourFormat, !!showSeconds));
      }
    };
    
    // 立即更新一次
    updateTime();
    
    // 设置1秒更新间隔
    const intervalId = setInterval(updateTime, 1000);
    
    return () => clearInterval(intervalId);
  }, [timezone, use24HourFormat, showSeconds]);

  // 渲染时钟数字
  const renderClock = () => {
    if (!mounted) return null;
    
    const digitWidth = size * 0.6;
    const digitGap = size * 0.2;
    const digits = currentTime.split('');
    
    return (
      <svg 
        width={clockWidth} 
        height={size} 
        viewBox={`0 0 ${clockWidth} ${size}`}
        style={{ overflow: 'visible' }}
      >
        {digits.map((digit, index) => {
          const xPos = index * (digitWidth + digitGap);
          return renderDigit(digit, xPos, 0, size, segmentThickness, digitColor);
        })}
      </svg>
    );
  };

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor,
      margin: '0 auto',
      width: 'fit-content',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    }}>
      {showTitle && (
        <h2 style={{ 
          color: digitColor,
          marginTop: 0,
          marginBottom: '1rem',
          fontSize: `${size / 3}px`,
          fontWeight: 500,
        }}>
          {title}
        </h2>
      )}
      
      <div style={{ 
        padding: '1rem',
        borderRadius: '4px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        minWidth: clockWidth,
      }}>
        {renderClock()}
      </div>
      
      <div style={{ 
        marginTop: '0.75rem', 
        fontSize: `${size / 6}px`,
        color: digitColor,
        opacity: 0.7
      }}>
        {timezone.replace('_', ' ')}
      </div>
    </div>
  );
}

// 自定义编辑组件，用于时区选择
export const EditComponent: React.FC<BlockProps & { onChange?: (value: BlockProps) => void }> = ({
  onChange,
  ...props
}) => {
  // 常用时区列表
  const commonTimezones = [
    { name: 'UTC (协调世界时)', value: 'UTC' },
    { name: 'America/New_York (美国东部时间)', value: 'America/New_York' },
    { name: 'America/Chicago (美国中部时间)', value: 'America/Chicago' },
    { name: 'America/Denver (美国山地时间)', value: 'America/Denver' },
    { name: 'America/Los_Angeles (美国太平洋时间)', value: 'America/Los_Angeles' },
    { name: 'Europe/London (英国时间)', value: 'Europe/London' },
    { name: 'Europe/Paris (欧洲中部时间)', value: 'Europe/Paris' },
    { name: 'Europe/Moscow (莫斯科时间)', value: 'Europe/Moscow' },
    { name: 'Asia/Shanghai (中国标准时间)', value: 'Asia/Shanghai' },
    { name: 'Asia/Tokyo (日本标准时间)', value: 'Asia/Tokyo' },
    { name: 'Asia/Dubai (阿联酋时间)', value: 'Asia/Dubai' },
    { name: 'Australia/Sydney (澳大利亚东部时间)', value: 'Australia/Sydney' },
  ];

  return (
    <div style={{ 
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      <label style={{ 
        fontWeight: 500,
        marginBottom: '0.25rem'
      }}>
        时区设置
      </label>
      
      <select 
        value={props.timezone} 
        onChange={(e) => {
          onChange?.({
            ...props,
            timezone: e.target.value
          });
        }}
        style={{ 
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      >
        {commonTimezones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.name}
          </option>
        ))}
      </select>
      
      <small style={{ 
        marginTop: '0.25rem',
        color: '#666'
      }}>
        请选择要显示的时区
      </small>
    </div>
  );
}; 