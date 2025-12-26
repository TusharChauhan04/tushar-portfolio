import { useEffect, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const WisprFlowAnimation = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const { theme } = useTheme();

  // Technical content - Excel, Python, SQL, ML, random numbers
  const flowContent = [
    '0x1A2B • √2 ≈ 1.414 • =VLOOKUP(A2,B:C,2) • SELECT * FROM users WHERE id > 100 • lambda x: x**2 • model.fit(X_train, y_train) • π ≈ 3.14159 • df.groupby() • =SUM(A1:A100) • ',
    'np.random.seed(42) • 42 • 137 • JOIN orders ON • =IF(A1>50,"High") • train_test_split(X, y) • φ ≈ 1.618 • pd.read_csv() • accuracy_score • e ≈ 2.718 • ',
    'RandomForest • UPDATE SET • =INDEX(MATCH()) • for i in range() • neural_network.compile() • 0xFF00AA • CREATE TABLE • relu activation • learning_rate=0.001 • √3 ≈ 1.732 • ',
    'gradient_descent • ALTER TABLE • batch_normalization • =AVERAGE() • confusion_matrix • DROP TABLE • LSTM layer • optimizer="adam" • 1729 • cross_val_score • '
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % flowContent.length);
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Text color based on theme
  const textColor = theme === 'dark' ? '#ffffff' : '#1a1a1a';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1600 900"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient mask for color transition */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(140, 140, 140, 0.6)" />
            <stop offset="45%" stopColor="rgba(140, 140, 140, 0.6)" />
            <stop offset="50%" stopColor={textColor} />
            <stop offset="100%" stopColor={textColor} />
          </linearGradient>
        </defs>

        {/* Curved path: top-left → down → bottom center → right */}
        <path
          id="flowPath"
          d="M 100,150 Q 150,200 200,300 Q 250,400 400,500 Q 600,600 800,600 Q 1000,600 1200,550 Q 1400,500 1500,450"
          fill="none"
          stroke="none"
        />

        {/* Black ribbon capsule at bottom center */}
        <rect
          x="720"
          y="575"
          width="160"
          height="50"
          rx="25"
          ry="25"
          fill="#1a1a1a"
          opacity="0.88"
          style={{ filter: 'drop-shadow(0 3px 10px rgba(0,0,0,0.18))' }}
        />

        {/* Flowing text - gray on left, changes to white/black in box area */}
        <text style={{
          fontSize: '16px',
          fontWeight: 400,
          letterSpacing: '0.4px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fill: 'url(#textGradient)'
        }}>
          <textPath href="#flowPath" startOffset="0%">
            {flowContent[contentIndex]}
            <animate
              attributeName="startOffset"
              from="-100%"
              to="200%"
              dur="35s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default WisprFlowAnimation;
