// theory_data.js
// 엘리어트 파동 이론 공통 데이터베이스 (모바일 가독성 극대화 & 무한 깜빡임 & 레이아웃 겹침 방지 완벽 적용)

// 🌟 [공통 모듈] 8파동 뼈대 및 무한 깜빡임 애니메이션 CSS
const base8WaveDef = `
    <style>
        @keyframes blinkInfinite { 
            0%, 100% { opacity: 1; } 
            50% { opacity: 0.15; } 
        }
        .blink-active { animation: blinkInfinite 2.5s ease-in-out infinite; }
        .blink-error { animation: blinkInfinite 2.5s ease-in-out infinite; stroke: #ef4444; fill: #ef4444; }
    </style>
    <path d="M 50 450 L 150 250 L 250 350 L 450 100 L 550 250 L 700 50 L 800 300 L 880 180 L 950 370" stroke="#334155" stroke-width="8" fill="none" opacity="0.4" stroke-linejoin="round" />
    
    <text x="130" y="210" fill="#475569" font-size="44" font-weight="bold">1</text>
    <text x="240" y="410" fill="#475569" font-size="44" font-weight="bold">2</text>
    <text x="420" y="60" fill="#475569" font-size="44" font-weight="bold">3</text>
    <text x="560" y="310" fill="#475569" font-size="44" font-weight="bold">4</text>
    <text x="690" y="20" fill="#475569" font-size="44" font-weight="bold">5</text>
    <text x="820" y="350" fill="#475569" font-size="44" font-weight="bold">A</text>
    <text x="890" y="140" fill="#475569" font-size="44" font-weight="bold">B</text>
    <text x="940" y="430" fill="#475569" font-size="44" font-weight="bold">C</text>
`;

const theoryDB = {
    "motive": {
        name: "동인파",
        waves: {
            "impulse": {
                name: "임펄스 파동",
                types: {
                    "concept": {
                        name: "개념 및 특징",
                        items: {
                            "basic": {
                                title: "1. 개념 설명",
                                content: "투자자들이 매매할때 가장 놓치고 싶지 않은 파동인 임펄스 파동입니다. 추세를 이끌고 강력하게 분출하는 5파동 구조입니다.<br>1파는 하락장에서 강한 반등으로 시작합니다.<br>2파는 1파의 대부분(0.618 이상)을 되돌리는 파동이며<br>3파는 거래량을 포함한 강한 상승파동입니다.<br>4파는 옆으로 아주 길게 횡보하며 시간적 조정을 가지는 경우가 많으며,<br>5파는 1파와 같은 크기로 나오는 경우가 많습니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <path d="M 100 400 L 250 200 L 350 280 L 650 50 L 750 150 L 900 20" stroke="#10b981" stroke-width="12" fill="none" stroke-linejoin="round" />
                                        
                                        <text x="250" y="170" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">1</text>
                                        <text x="350" y="330" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">2</text>
                                        <text x="650" y="20" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">3</text>
                                        <text x="750" y="200" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">4</text>
                                        <text x="900" y="-10" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">5</text>
                                    </svg>
                                `
                            },
                            "feature": {
                                title: "2. 파동 특징 및 거래량",
                                content: "1, 3, 5파 중 하나는 유독 길게 늘어나는 <strong>'연장(Extension)'</strong>이 발생하며, 암호화폐 시장에서는 주로 <strong>3파 연장</strong>이 발생합니다.<br><br>📊 <strong>[거래량 특징]</strong> 연장되는 파동(3파)에서 대중의 FOMO로 인해 거래량이 폭발적으로 터집니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <path d="M 50 350 L 200 200 L 300 280 L 600 50 L 700 150 L 850 50" stroke="#10b981" stroke-width="10" fill="none" stroke-linejoin="round" />
                                        <line x1="40" y1="380" x2="960" y2="380" stroke="#334155" stroke-width="4" />
                                        <rect x="150" y="280" width="50" height="100" fill="#10b981" />
                                        <rect x="550" y="150" width="60" height="230" fill="#10b981" opacity="0.8" />
                                        <rect x="800" y="310" width="50" height="70" fill="#10b981" opacity="0.5" />
                                        
                                        <text x="450" y="30" fill="#10b981" font-size="32" font-weight="900" text-anchor="middle">3 (폭발적 연장)</text>
                                        <text x="580" y="130" fill="#6ee7b7" font-size="28" font-weight="bold" text-anchor="middle">대중의 광기 (거래량 폭발)</text>
                                    </svg>
                                `
                            },
                            "location": {
                                title: "3. 출현 가능 위치",
                                content: "전체 8파동 사이클 중 상승을 주도하는 <strong>1파, 3파, 5파</strong>에 등장하며, 하락장에서는 지그재그의 <strong>A파, C파</strong>에서 등장합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        ${base8WaveDef}
                                        <path d="M 50 450 L 150 250" stroke="#10b981" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <path d="M 250 350 L 450 100" stroke="#10b981" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <path d="M 550 250 L 700 50" stroke="#10b981" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <path d="M 700 50 L 800 300" stroke="#ef4444" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <path d="M 880 180 L 950 370" stroke="#ef4444" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                    </svg>
                                `
                            }
                        }
                    },
                    "rules": {
                        name: "절대 규칙 및 실전 매매",
                        items: {
                            "rule_1": {
                                title: "4. 절대 규칙 ① (2파 이탈 불가)",
                                content: "2번 파동은 <strong>절대로 1번 파동의 시작점(저점)을 하향 이탈할 수 없습니다.</strong> 만약 이탈했다면 해당 파동은 임펄스 1, 2파동이 아니라는 의미(카운팅 오류)입니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <path d="M 100 250 L 400 100 L 600 280" stroke="#ef4444" stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round" />
                                        <line x1="50" y1="250" x2="800" y2="250" stroke="#ef4444" stroke-width="4" stroke-dasharray="10" />
                                        <g class="blink-error">
                                            <line x1="550" y1="230" x2="650" y2="330" stroke="#ef4444" stroke-width="16" stroke-linecap="round" />
                                            <line x1="650" y1="230" x2="550" y2="330" stroke="#ef4444" stroke-width="16" stroke-linecap="round" />
                                        </g>
                                        <text x="100" y="235" fill="#94a3b8" font-size="24" font-weight="bold">1파 시작점</text>
                                        <text x="400" y="70" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">1</text>
                                        <text x="620" y="400" fill="#ef4444" font-size="32" font-weight="bold" text-anchor="middle">2 (살짝 이탈해도 카운팅 오류!)</text>
                                    </svg>
                                `
                            },
                            "rule_2": {
                                title: "4. 절대 규칙 ② (3파 최단파 불가)",
                                content: "1파, 3파, 5파 중에서 <strong>3번 파동이 가장 짧은 파동이 될 수 없습니다.</strong>",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <line x1="200" y1="150" x2="700" y2="150" stroke="#475569" stroke-width="3" stroke-dasharray="8" />
                                        <path d="M 100 400 L 300 150 L 400 250 L 550 100 L 650 140 L 850 -50" stroke="#ef4444" stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round" />
                                        
                                        <g class="blink-error">
                                            <line x1="450" y1="125" x2="550" y2="225" stroke="#ef4444" stroke-width="16" stroke-linecap="round" />
                                            <line x1="550" y1="125" x2="450" y2="225" stroke="#ef4444" stroke-width="16" stroke-linecap="round" />
                                        </g>
                                        
                                        <text x="710" y="155" fill="#94a3b8" font-size="18" font-weight="bold">1파 고점 (정상 돌파)</text>
                                        <text x="300" y="120" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">1 (긺)</text>
                                        <text x="400" y="290" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">2</text>
                                        <text x="550" y="70" fill="#ef4444" font-size="32" font-weight="bold" text-anchor="middle">3 (가장 짧음)</text>
                                        <text x="650" y="180" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">4</text>
                                        <text x="850" y="-80" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">5 (긺)</text>
                                        <text x="500" y="320" fill="#ef4444" font-size="24" font-weight="bold" text-anchor="middle">3파가 가장 짧음 (절대 불가!)</text>
                                    </svg>
                                `
                            },
                            "rule_3": {
                                title: "4. 절대 규칙 ③ (1-4파 겹침 불가)",
                                content: "4번 파동의 저점은 <strong>절대로 1번 파동의 고점 가격대를 침범할 수 없습니다.</strong>",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <path d="M 100 350 L 250 200 L 350 280 L 600 50 L 750 220 L 900 100" stroke="#ef4444" stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round" />
                                        <line x1="50" y1="200" x2="900" y2="200" stroke="#ef4444" stroke-width="4" stroke-dasharray="10" />
                                        <rect x="650" y="200" width="150" height="40" fill="#ef4444" opacity="0.3" />
                                        
                                        <text x="250" y="170" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">1</text>
                                        <text x="350" y="320" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">2</text>
                                        <text x="600" y="20" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">3</text>
                                        <text x="750" y="260" fill="#ef4444" font-size="32" font-weight="bold" text-anchor="middle">4 (겹침!)</text>
                                        <text x="810" y="225" fill="#fca5a5" font-size="20" font-weight="bold">1파 고점 침범 불가</text>
                                    </svg>
                                `
                            },
                            "strategy": {
                                title: "5. 실전 매매 전략",
                                content: "규칙 ①을 활용한 완벽한 손익비 타점입니다. 1파 상승 후 2파 되돌림 시 진입하고, 1파 시작점 바로 아래에 타이트한 손절을 겁니다. 잃을 땐 조금, 벌 땐 크게 버는 자리입니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        <path d="M 100 600 L 300 250 L 450 450" stroke="#10b981" stroke-width="12" fill="none" stroke-linejoin="round" stroke-linecap="round" />
                                        <line x1="50" y1="600" x2="950" y2="600" stroke="#ef4444" stroke-width="6" stroke-dasharray="14" />
                                        <path d="M 450 450 L 800 50" stroke="#10b981" stroke-width="14" stroke-dasharray="16" fill="none" class="animate-draw" style="animation-delay: 1s;" stroke-linejoin="round" stroke-linecap="round" />
                                        <circle cx="450" cy="450" r="20" fill="#10b981" class="animate-pulse" />
                                        <path d="M 450 450 L 550 450" stroke="#10b981" stroke-width="5" stroke-dasharray="8" fill="none" />
                                        
                                        <text x="950" y="570" fill="#ef4444" font-size="32" font-weight="bold" text-anchor="end">1파 시작점 (절대 손절선)</text>
                                        <text x="820" y="40" fill="#10b981" font-size="48" font-weight="900">3파 폭발</text>
                                        <text x="90" y="650" fill="#f8fafc" font-size="48" font-weight="900">0</text>
                                        <text x="300" y="210" fill="#f8fafc" font-size="48" font-weight="900" text-anchor="middle">1</text>
                                        
                                        <g transform="translate(550, 380)">
                                            <rect x="0" y="0" width="420" height="130" rx="20" fill="#064e3b" stroke="#10b981" stroke-width="5" />
                                            <text x="210" y="55" fill="#fff" font-size="32" font-weight="bold" text-anchor="middle">하락중 지지되는 구간 확인후</text>
                                            <text x="210" y="105" fill="#6ee7b7" font-size="40" font-weight="900" text-anchor="middle">안전한 롱(Long) 진입!</text>
                                        </g>
                                    </svg>
                                `
                            }
                        }
                    }
                }
            },
            "leading_diagonal": {
                name: "리딩 다이아고날 (선도 쐐기형)",
                types: {
                    "concept": {
                        name: "개념 및 특징",
                        items: {
                            "step1_concept": {
                                title: "1. 차트를 포함한 개념 설명",
                                content: "거대한 추세의 시작을 알리는 신호탄입니다. 고점과 저점이 점차 모이는 쐐기(Wedge) 패턴을 그리며 5파동 구조로 전개됩니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <line x1="100" y1="190" x2="950" y2="20" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        <line x1="200" y1="340" x2="850" y2="145" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        
                                        <path d="M 100 350 L 300 150 L 400 280 L 600 90 L 700 190 L 900 30" stroke="#6366f1" stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round" />
                                        
                                        <text x="300" y="120" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">1</text>
                                        <text x="400" y="320" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">2</text>
                                        <text x="600" y="60" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">3</text>
                                        <text x="700" y="230" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">4</text>
                                        <text x="900" y="-10" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">5</text>
                                    </svg>
                                `
                            },
                            "step2_feature": {
                                title: "2. 파동 특징 및 거래량",
                                content: "임펄스와 달리 상승이 매끄럽지 못하고 지저분하게 올라갑니다. 1파의 고점과 4파의 저점이 겹치는 것이 특징입니다.<br><br>📊 <strong>[거래량 특징]</strong> 쐐기 내부로 파동이 밀집되며 상승할수록 거래량이 점진적으로 줄어듭니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                        <line x1="100" y1="190" x2="950" y2="20" stroke="#475569" stroke-width="4" stroke-dasharray="10" opacity="0.5" />
                                        <line x1="200" y1="340" x2="850" y2="145" stroke="#475569" stroke-width="4" stroke-dasharray="10" opacity="0.5" />
                                        <path d="M 100 350 L 300 150 L 400 280 L 600 90 L 700 190 L 900 30" stroke="#6366f1" stroke-width="8" fill="none" stroke-linejoin="round" stroke-linecap="round" />
                                        
                                        <rect x="280" y="150" width="450" height="40" fill="#10b981" opacity="0.2" rx="8" />
                                        <text x="750" y="177" fill="#6ee7b7" font-size="20" font-weight="bold">1파, 4파 겹침</text>

                                        <line x1="50" y1="400" x2="950" y2="400" stroke="#334155" stroke-width="4" />
                                        <rect x="250" y="280" width="40" height="120" fill="#10b981" />
                                        <rect x="500" y="320" width="40" height="80" fill="#10b981" opacity="0.8" />
                                        <rect x="750" y="370" width="40" height="30" fill="#10b981" opacity="0.6" />
                                        <path d="M 270" y="270" L 770 360" stroke="#ef4444" stroke-width="4" stroke-dasharray="8" fill="none" />
                                        <text x="500" y="440" fill="#fca5a5" font-size="24" font-weight="bold" text-anchor="middle">상승할수록 거래량은 점진적 감소</text>

                                        <text x="300" y="120" fill="#f8fafc" font-size="28" font-weight="bold" text-anchor="middle">1</text>
                                        <text x="400" y="315" fill="#f8fafc" font-size="28" font-weight="bold" text-anchor="middle">2</text>
                                        <text x="600" y="60" fill="#f8fafc" font-size="28" font-weight="bold" text-anchor="middle">3</text>
                                        <text x="700" y="225" fill="#f8fafc" font-size="28" font-weight="bold" text-anchor="middle">4</text>
                                        <text x="900" y="-10" fill="#f8fafc" font-size="28" font-weight="bold" text-anchor="middle">5</text>
                                    </svg>
                                `
                            },
                            "step3_location": {
                                title: "3. 출현 가능 위치",
                                content: "오직 전체 사이클의 첫 시작인 <strong>1파</strong> 또는 지그재그의 첫 시작인 <strong>A파</strong>에서만 제한적으로 출현합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        ${base8WaveDef}
                                        <path d="M 50 450 L 150 250" stroke="#10b981" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <path d="M 700 50 L 800 300" stroke="#ef4444" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <g transform="translate(100, 580)">
                                            <rect x="0" y="0" width="800" height="90" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="4" />
                                            <text x="400" y="55" fill="#6e7ce7" font-size="32" font-weight="bold" text-anchor="middle">추세의 첫 시작점(1파, A파)에만 깜빡입니다.</text>
                                        </g>
                                    </svg>
                                `
                            },
                            "step4_rules": {
                                title: "4. 절대 규칙 (1-4파 겹침)",
                                content: "일반 임펄스 파동에서는 절대 허용되지 않는 <strong>'1파 고점과 4파 저점의 겹침(Overlap)'이 다이아고날에서는 반드시 일어나야 합니다.</strong>",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <line x1="100" y1="190" x2="950" y2="20" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        <line x1="200" y1="340" x2="850" y2="145" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        <path d="M 100 350 L 300 150 L 400 280 L 600 90 L 700 190 L 900 30" stroke="#6366f1" stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round" />
                                        
                                        <rect x="200" y="150" width="600" height="40" fill="#10b981" opacity="0.3" rx="8" />
                                        <text x="500" y="177" fill="#6ee7b7" font-size="24" font-weight="bold" text-anchor="middle">1파, 4파 겹침</text>
                                        
                                        <text x="300" y="120" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">1</text>
                                        <text x="400" y="320" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">2</text>
                                        <text x="600" y="60" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">3</text>
                                        <text x="700" y="230" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">4</text>
                                        <text x="900" y="-10" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">5</text>
                                    </svg>
                                `
                            },
                            "strategy": {
                                title: "5. 실전 매매 전략",
                                content: "리딩 다이아고날(1파)이 완성되면, 이어지는 2파 조정은 일반 임펄스보다 <strong>훨씬 깊고 빠르게(피보나치 0.786~0.886) 떨어지는 성질</strong>이 있습니다. 쐐기 상단을 돌파할 것이라 믿고 추격 롱을 타면 크게 물립니다. 깊은 하락을 기다렸다가 바닥에서 진입하세요.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 600" class="w-full h-full overflow-visible">
                                        <line x1="50" y1="20" x2="900" y2="20" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                        <text x="910" y="25" fill="#94a3b8" font-size="16" font-weight="bold">1</text>
                                        
                                        <line x1="50" y1="180" x2="900" y2="180" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                        <text x="910" y="185" fill="#94a3b8" font-size="16">0.382</text>

                                        <line x1="50" y1="230" x2="900" y2="230" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                        <text x="910" y="235" fill="#94a3b8" font-size="16">0.5</text>
                                        
                                        <line x1="50" y1="280" x2="900" y2="280" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                        <text x="910" y="285" fill="#94a3b8" font-size="16">0.618</text>

                                        <line x1="50" y1="350" x2="900" y2="350" stroke="#ef4444" stroke-width="2" stroke-dasharray="6" opacity="0.8" />
                                        <text x="910" y="355" fill="#ef4444" font-size="16" font-weight="bold">0.786</text>

                                        <line x1="50" y1="440" x2="900" y2="440" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                        <text x="910" y="445" fill="#94a3b8" font-size="16" font-weight="bold">0</text>
                                        
                                        <line x1="150" y1="254" x2="850" y2="2" stroke="#475569" stroke-width="4" stroke-dasharray="10" opacity="0.6" />
                                        <line x1="200" y1="472" x2="850" y2="108" stroke="#475569" stroke-width="4" stroke-dasharray="10" opacity="0.6" />
                                        
                                        <path d="M 100 440 L 300 200 L 400 360 L 550 110 L 650 220 L 800 20" stroke="#6366f1" stroke-width="8" fill="none" stroke-linejoin="round" stroke-linecap="round" />
                                        
                                        <path d="M 800 20 L 850 350" stroke="#ef4444" stroke-width="10" fill="none" class="animate-draw" stroke-linecap="round" />
                                        <circle cx="850" cy="350" r="16" fill="#10b981" class="animate-pulse" />
                                        
                                        <line x1="800" y1="350" x2="850" y2="350" stroke="#10b981" stroke-width="4" stroke-dasharray="6" />
                                        
                                        <text x="300" y="160" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">1</text>
                                        <text x="400" y="410" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">2</text>
                                        <text x="550" y="70" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">3</text>
                                        <text x="650" y="270" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">4</text>
                                        <text x="800" y="-20" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">5</text>
                                        
                                        <g transform="translate(480, 305)">
                                            <rect x="0" y="0" width="310" height="90" rx="16" fill="#064e3b" stroke="#10b981" stroke-width="4" />
                                            <text x="155" y="38" fill="#fff" font-size="20" font-weight="bold" text-anchor="middle">피보나치 0.786 깊은 하락</text>
                                            <text x="155" y="72" fill="#6ee7b7" font-size="24" font-weight="900" text-anchor="middle">3파 타겟 롱(Long) 진입</text>
                                        </g>
                                    </svg>
                                `
                            }
                        }
                    }
                }
            },
            "ending_diagonal": {
                name: "엔딩 다이아고날 (마감 쐐기형)",
                types: {
                    "concept": {
                        name: "개념 및 특징",
                        items: {
                            "step1_concept": {
                                title: "1. 차트를 포함한 개념 설명",
                                content: "시장의 매수 에너지가 완전히 고갈되어 추세가 곧 끝날 것임을 암시하는 가장 강력한 반전(Reversal) 패턴입니다. 고점과 저점이 수렴하는 쐐기 형태를 보입니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <path d="M 50 190 L 900 54" stroke="#475569" stroke-width="4" stroke-dasharray="10" fill="none" />
                                        <path d="M 50 378 L 900 140" stroke="#475569" stroke-width="4" stroke-dasharray="10" fill="none" />
                                        <path d="M 100 380 L 300 150 L 400 280 L 550 110 L 650 210 L 800 70" stroke="#10b981" stroke-width="10" fill="none" stroke-linejoin="round" />
                                        
                                        <text x="300" y="120" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">1</text>
                                        <text x="400" y="320" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">2</text>
                                        <text x="550" y="80" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">3</text>
                                        <text x="650" y="250" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">4</text>
                                        <text x="800" y="40" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">5</text>
                                    </svg>
                                `
                            },
                            "step2_feature": {
                                title: "2. 파동 특징 및 거래량",
                                content: "개미들은 가격이 전고점을 뚫고 계속 상승한다고 환희에 차 있지만, 실제로는 에너지가 소멸해가는 과정입니다.<br><br>📊 <strong>[거래량 특징]</strong> 가격 고점은 높아지지만 거래량은 이미 바닥을 기는 완벽한 '다이버전스' 현상이 나타납니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                        <path d="M 50 150 L 900 -20" stroke="#475569" stroke-width="4" stroke-dasharray="10" fill="none" opacity="0.6"/>
                                        <path d="M 50 270 L 900 100" stroke="#475569" stroke-width="4" stroke-dasharray="10" fill="none" opacity="0.6"/>
                                        <path d="M 100 280 L 300 100 L 400 200 L 550 50 L 650 150 L 800 20" stroke="#10b981" stroke-width="8" fill="none" stroke-linejoin="round" />
                                        
                                        <text x="300" y="70" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">1</text>
                                        <text x="400" y="240" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">2</text>
                                        <text x="550" y="20" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">3</text>
                                        <text x="650" y="190" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">4</text>
                                        <text x="800" y="-10" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">5</text>

                                        <line x1="50" y1="400" x2="950" y2="400" stroke="#334155" stroke-width="4" />
                                        <rect x="250" y="250" width="40" height="150" fill="#10b981" opacity="0.8" />
                                        <rect x="500" y="320" width="40" height="80" fill="#10b981" opacity="0.6" />
                                        <rect x="750" y="370" width="40" height="30" fill="#10b981" opacity="0.4" />
                                        <path d="M 270 240 L 770 360" stroke="#ef4444" stroke-width="4" stroke-dasharray="8" fill="none" />
                                        <text x="500" y="440" fill="#fca5a5" font-size="24" font-weight="bold" text-anchor="middle">상승할수록 거래량은 완전히 고갈됨</text>
                                    </svg>
                                `
                            },
                            "step3_location": {
                                title: "3. 출현 가능 위치",
                                content: "오직 추세의 마지막 불꽃이 타오르는 <strong>5파</strong> 또는 지그재그의 마지막 <strong>C파</strong>에서만 제한적으로 출현합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        ${base8WaveDef}
                                        <path d="M 550 250 L 700 50" stroke="#10b981" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <path d="M 880 180 L 950 370" stroke="#ef4444" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <g transform="translate(100, 580)">
                                            <rect x="0" y="0" width="800" height="90" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="4" />
                                            <text x="400" y="55" fill="#fcd34d" font-size="32" font-weight="bold" text-anchor="middle">오직 추세의 끝자락(5파, C파)에서만 깜빡입니다.</text>
                                        </g>
                                    </svg>
                                `
                            },
                            "step4_rules": {
                                title: "4. 절대 규칙",
                                content: "리딩 다이아고날과 모양 및 1-4파 겹침 규칙은 같으나, <strong>내부 파동이 반드시 3-3-3-3-3 구조(모두 지그재그 형태)</strong>로만 잘게 쪼개져서 올라가는 것이 핵심 규칙입니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                        <path d="M 50 220 L 950 76" stroke="#ef4444" stroke-width="6" stroke-dasharray="10" fill="none" opacity="0.8" />
                                        <path d="M 50 432 L 950 144" stroke="#ef4444" stroke-width="6" stroke-dasharray="10" fill="none" opacity="0.8" />
                                        
                                        <path d="M 100 420 L 160 260 L 230 330 L 300 180 L 330 270 L 360 230 L 400 320 L 450 190 L 500 250 L 550 140 L 580 210 L 610 180 L 650 240 L 700 140 L 750 190 L 800 100" stroke="#60a5fa" stroke-width="4" opacity="0.8" fill="none" stroke-linejoin="round" />
                                        <path d="M 100 420 L 300 180 L 400 320 L 550 140 L 650 240 L 800 100" stroke="#10b981" stroke-width="10" fill="none" stroke-linejoin="round" />
                                        
                                        <text x="300" y="150" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">1</text>
                                        <text x="400" y="360" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">2</text>
                                        <text x="550" y="110" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">3</text>
                                        <text x="650" y="280" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">4</text>
                                        <text x="800" y="70" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">5</text>
                                        
                                        <g transform="translate(100, 50)">
                                            <rect x="0" y="0" width="280" height="50" fill="#1e3a8a" rx="8" opacity="0.8"/>
                                            <text x="140" y="35" fill="#93c5fd" font-size="24" font-weight="bold" text-anchor="middle">내부 3-3-3-3-3 구조 필수</text>
                                        </g>
                                    </svg>
                                `
                            },
                            "step5_strategy": {
                                title: "5. 실전 매매 전략 (완벽 타점)",
                                content: "패턴 완성 후 하단 추세선을 이탈할 때 추격하는 것보다, <strong>이탈 후 다시 반등(리테스트) 시 5파 고점을 넘지 못하는 것을 확인하고 숏(Short) 진입</strong>하는 것이 휩소를 피하는 가장 안전한 타점입니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        <style>
                                            .ed-fade { animation: edFade 12s infinite; }
                                            @keyframes edFade { 0%, 90% {opacity: 1;} 95%, 100% {opacity: 0;} }
                                            .ed-drop1 { stroke-dasharray: 300; stroke-dashoffset: 300; animation: edD1 12s infinite ease-out; }
                                            @keyframes edD1 { 0% {stroke-dashoffset: 300;} 4%, 100% {stroke-dashoffset: 0;} }
                                            .ed-text1 { opacity: 0; animation: edT1 12s infinite; }
                                            @keyframes edT1 { 0%, 3.9% {opacity: 0;} 4%, 100% {opacity: 1;} }
                                            .ed-drop2 { stroke-dasharray: 300; stroke-dashoffset: 300; animation: edD2 12s infinite ease-in-out; }
                                            @keyframes edD2 { 0%, 16% {stroke-dashoffset: 300;} 20%, 100% {stroke-dashoffset: 0;} }
                                            .ed-pulse { opacity: 0; animation: edP 12s infinite; transform-origin: 650px 220px; }
                                            @keyframes edP { 0%, 19.9% {opacity: 0; transform: scale(0.5);} 20%, 100% {opacity: 1; transform: scale(1);} }
                                            .ed-text2 { opacity: 0; animation: edT2 12s infinite; }
                                            @keyframes edT2 { 0%, 19.9% {opacity: 0; transform: translateX(-10px);} 20%, 100% {opacity: 1; transform: translateX(0);} }
                                            .ed-sl { opacity: 0; animation: edSL 12s infinite; }
                                            @keyframes edSL { 0%, 28.9% {opacity: 0;} 29%, 100% {opacity: 1;} }
                                            .ed-drop3 { stroke-dasharray: 700; stroke-dashoffset: 700; animation: edD3 12s infinite ease-in; }
                                            @keyframes edD3 { 0%, 31% {stroke-dashoffset: 700;} 37%, 100% {stroke-dashoffset: 0;} }
                                        </style>
                                        
                                        <path d="M 50 350 L 700 90" stroke="#475569" stroke-width="6" stroke-dasharray="10" fill="none" />
                                        <path d="M 50 580 L 700 190" stroke="#475569" stroke-width="6" stroke-dasharray="10" fill="none" />
                                        
                                        <path d="M 50 610 L 150 310 L 250 460 L 350 230 L 420 358 L 500 170" stroke="#10b981" stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round" />
                                        
                                        <g class="ed-fade">
                                            <path d="M 500 170 L 550 400" stroke="#ef4444" stroke-width="10" fill="none" class="ed-drop1" stroke-linecap="round" />
                                            
                                            <circle cx="527" cy="294" r="10" fill="#ef4444" class="ed-text1" />
                                            <text x="545" y="285" fill="#fca5a5" font-size="22" font-weight="bold" class="ed-text1">1. 추세선 이탈 확인</text>
                                            
                                            <rect x="545" y="300" width="145" height="34" rx="6" fill="#f59e0b" class="ed-text1" />
                                            <text x="617" y="324" fill="#000" font-size="20" font-weight="900" text-anchor="middle" class="ed-text1">숏 타점 대기 ⏳</text>
                                            
                                            <path d="M 550 400 L 650 220" stroke="#ef4444" stroke-width="10" fill="none" class="ed-drop2" stroke-linecap="round" />
                                            
                                            <circle cx="650" cy="220" r="20" fill="#ef4444" class="ed-pulse" />

                                            <path d="M 650 220 L 710 220" stroke="#ef4444" stroke-width="4" stroke-dasharray="8" fill="none" class="ed-text2" />
                                            <g transform="translate(710, 155)" class="ed-text2">
                                                <rect x="0" y="0" width="280" height="130" rx="16" fill="#450a0a" stroke="#ef4444" stroke-width="5" />
                                                <text x="140" y="45" fill="#fff" font-size="24" font-weight="bold" text-anchor="middle">2. 반등시 고점 돌파</text>
                                                <text x="140" y="75" fill="#fff" font-size="24" font-weight="bold" text-anchor="middle">실패 확인! (리테스트)</text>
                                                <text x="140" y="115" fill="#fca5a5" font-size="28" font-weight="900" text-anchor="middle">안전한 숏 진입</text>
                                            </g>

                                            <g class="ed-sl">
                                                <line x1="500" y1="170" x2="980" y2="170" stroke="#ef4444" stroke-width="4" stroke-dasharray="10" />
                                                <text x="970" y="150" fill="#ef4444" font-size="22" font-weight="bold" text-anchor="end">5파 고점 (절대 손절선)</text>
                                            </g>

                                            <path d="M 650 220 L 750 700" stroke="#ef4444" stroke-width="16" stroke-dasharray="20" fill="none" class="ed-drop3" stroke-linecap="round" />
                                        </g>

                                        <text x="160" y="550" fill="#94a3b8" font-size="24" font-weight="bold">하단 추세선 (생명선)</text>
                                        <text x="140" y="280" fill="#f8fafc" font-size="32" font-weight="900">1</text>
                                        <text x="250" y="500" fill="#f8fafc" font-size="32" font-weight="900">2</text>
                                        <text x="340" y="200" fill="#f8fafc" font-size="32" font-weight="900">3</text>
                                        <text x="420" y="400" fill="#f8fafc" font-size="32" font-weight="900">4</text>
                                        <text x="490" y="140" fill="#f8fafc" font-size="36" font-weight="900">5파</text>
                                    </svg>
                                `
                            }
                        }
                    }
                }
            }
        }
    },
    "corrective": {
        name: "조정파",
        waves: {
            "zigzag": {
                name: "지그재그 (Zigzag)",
                types: {
                    "concept": {
                        name: "개념 및 특징",
                        items: {
                            "step1_concept": {
                                title: "1. 차트를 포함한 개념 설명",
                                content: "가장 기본적인 조정 패턴으로, 이전 추세를 날카롭고 깊게 되돌리는 번개(⚡) 모양의 하락(5-3-5 구조) 패턴입니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <path d="M 100 100 L 160 220 L 220 150 L 280 310 L 340 260 L 400 350" stroke="#fcd34d" stroke-width="4" stroke-dasharray="8" fill="none" stroke-linejoin="round" />
                                        
                                        <path d="M 400 350 L 460 220 L 530 280 L 600 200" stroke="#fcd34d" stroke-width="4" stroke-dasharray="8" fill="none" stroke-linejoin="round" />
                                        
                                        <path d="M 600 200 L 660 320 L 720 250 L 780 410 L 840 360 L 900 450" stroke="#fcd34d" stroke-width="4" stroke-dasharray="8" fill="none" stroke-linejoin="round" />
                                        
                                        <path d="M 100 100 L 400 350 L 600 200 L 900 450" stroke="#f59e0b" stroke-width="10" fill="none" stroke-linejoin="round" opacity="0.8" />
                                        
                                        <text x="400" y="390" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">A (5파동)</text>
                                        <text x="600" y="160" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">B (3파동)</text>
                                        <text x="900" y="490" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">C (5파동)</text>
                                    </svg>
                                `
                            },
                            "step2_feature": {
                                title: "2. 파동 특징 및 거래량",
                                content: "가격이 가파르게 떨어지며 개미들에게 공포를 줍니다.<br><br>📊 <strong>[거래량 특징]</strong> A파 급락 시 거래량이 크게 터지며, B파 반등(데드캣) 시에는 거래량이 확연히 줄어듭니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                        <path d="M 100 50 L 400 300 L 600 150 L 900 400" stroke="#f59e0b" stroke-width="8" fill="none" stroke-linejoin="round" />
                                        
                                        <text x="400" y="340" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">A</text>
                                        <text x="600" y="120" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">B</text>
                                        <text x="900" y="440" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">C</text>

                                        <line x1="50" y1="420" x2="950" y2="420" stroke="#334155" stroke-width="4" />
                                        <rect x="250" y="320" width="40" height="100" fill="#ef4444" opacity="0.8" />
                                        <rect x="500" y="370" width="40" height="50" fill="#10b981" opacity="0.5" />
                                        <rect x="750" y="300" width="40" height="120" fill="#ef4444" opacity="0.8" />
                                        <text x="50" y="400" fill="#64748b" font-size="20" font-weight="bold">Volume</text>
                                    </svg>
                                `
                            },
                            "step3_location": {
                                title: "3. 출현 가능 위치",
                                content: "강한 되돌림이 필요한 <strong>2파</strong>나 복합조정의 <strong>B파, X파</strong> 등 조정이 발생하는 거의 모든 구간에서 광범위하게 출현합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        ${base8WaveDef}
                                        <path d="M 150 250 L 250 350" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" /> 
                                        <path d="M 450 100 L 550 250" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" /> 
                                        <path d="M 700 50 L 800 300" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" /> 
                                        <path d="M 800 300 L 880 180" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" /> 
                                        <g transform="translate(100, 580)">
                                            <rect x="0" y="0" width="800" height="90" rx="20" fill="#0f172a" stroke="#f59e0b" stroke-width="5" />
                                            <text x="400" y="55" fill="#fcd34d" font-size="28" font-weight="bold" text-anchor="middle">2파, 4파, A파, B파 등 조정 전 구간에서 출현합니다.</text>
                                        </g>
                                    </svg>
                                `
                            }
                        }
                    },
                    "rules": {
                        name: "절대 규칙 및 실전 매매",
                        items: {
                            "rule_1": {
                                title: "4. 절대 규칙 ① (B파 반등 한계)",
                                content: "<strong>B파는 절대로 A파 시작점을 넘을 수 없습니다.</strong> 또한 B파는 단순 지그재그뿐 아니라 복합조정(WXY)이나 삼각수렴 등 매우 복잡하게 나올 수 있습니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <path d="M 100 100 L 400 350 L 600 200 L 900 450" stroke="#f59e0b" stroke-width="10" fill="none" stroke-linejoin="round" />
                                        <line x1="20" y1="100" x2="680" y2="100" stroke="#ef4444" stroke-width="4" stroke-dasharray="10" />
                                        
                                        <text x="400" y="390" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">A</text>
                                        <text x="600" y="200" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">B</text>
                                        <text x="900" y="490" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">C</text>

                                        <text x="690" y="110" fill="#ef4444" font-size="20" font-weight="bold">B파는 A파 시작점 침범 불가</text>
                                        <text x="300" y="160" fill="#fcd34d" font-size="18" font-weight="bold">※ B파는 삼각수렴, WXY 등 복잡하게 전개</text>
                                    </svg>
                                `
                            },
                            "rule_2": {
                                title: "4. 절대 규칙 ② (다이아고날 중복 금지)",
                                content: "마지막 C파는 반드시 <strong>임펄스</strong> 혹은 <strong>엔딩 다이아고날</strong>이어야 하며, 지그재그의 A파와 C파에 다이아고날이 동시에 출현할 순 없습니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <g opacity="0.15">
                                            <line x1="380" y1="100" x2="570" y2="350" stroke="#ef4444" stroke-width="40" stroke-linecap="round" />
                                            <line x1="570" y1="100" x2="380" y2="350" stroke="#ef4444" stroke-width="40" stroke-linecap="round" />
                                        </g>

                                        <line x1="160" y1="122" x2="420" y2="304" stroke="#475569" stroke-width="3" stroke-dasharray="6" />
                                        <line x1="180" y1="242" x2="420" y2="338" stroke="#475569" stroke-width="3" stroke-dasharray="6" />

                                        <line x1="510" y1="122" x2="770" y2="304" stroke="#475569" stroke-width="3" stroke-dasharray="6" />
                                        <line x1="530" y1="242" x2="770" y2="338" stroke="#475569" stroke-width="3" stroke-dasharray="6" />

                                        <path d="M 200 150 L 400 330" stroke="#ef4444" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.3" />
                                        <path d="M 400 330 L 550 150" stroke="#f59e0b" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />
                                        <path d="M 550 150 L 750 330" stroke="#ef4444" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.3" />

                                        <path d="M 200 150 L 240 266 L 280 206 L 320 298 L 360 262 L 400 330" stroke="#fcd34d" stroke-width="4" fill="none" stroke-linejoin="round" stroke-linecap="round" />

                                        <path d="M 550 150 L 590 266 L 630 206 L 670 298 L 710 262 L 750 330" stroke="#fcd34d" stroke-width="4" fill="none" stroke-linejoin="round" stroke-linecap="round" />

                                        <text x="280" y="380" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">A</text>
                                        <text x="475" y="110" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">B</text>
                                        <text x="670" y="380" fill="#f8fafc" font-size="36" font-weight="bold" text-anchor="middle">C</text>

                                        <g transform="translate(730, 50)">
                                            <rect x="0" y="0" width="260" height="180" rx="16" fill="#1e293b" stroke="#64748b" stroke-width="3" />
                                            <text x="130" y="45" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">🚨 다이아고날 중복 금지</text>
                                            
                                            <rect x="15" y="70" width="230" height="40" rx="8" fill="#064e3b" />
                                            <text x="130" y="95" fill="#6ee7b7" font-size="15" font-weight="bold" text-anchor="middle">A(다이아) + C(임펄스) = 🟢</text>
                                            
                                            <rect x="15" y="120" width="230" height="40" rx="8" fill="#450a0a" />
                                            <text x="130" y="145" fill="#fca5a5" font-size="15" font-weight="bold" text-anchor="middle">A(다이아) + C(다이아) = ❌</text>
                                        </g>
                                    </svg>
                                `
                            },
                            "strategy": {
                                title: "5. 실전 매매 전략",
                                content: "A파가 5파동 형태로 강하게 하락했다면 지그재그(5-3-5)가 확정적입니다. <strong>거래량 없는 B파 반등(피보나치 0.618 구간) 끝자락에서 A파 시작점을 절대 손절선으로 잡고, C파 하락을 노리는 숏 진입</strong>이 가장 안전한 타점입니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        <line x1="50" y1="150" x2="880" y2="150" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                        <text x="890" y="155" fill="#94a3b8" font-size="16" font-weight="bold" text-anchor="start">1 (고점)</text>

                                        <line x1="50" y1="283" x2="880" y2="283" stroke="#ef4444" stroke-width="2" stroke-dasharray="6" opacity="0.8" />
                                        <text x="890" y="288" fill="#ef4444" font-size="16" font-weight="bold" text-anchor="start">0.618</text>

                                        <line x1="50" y1="325" x2="880" y2="325" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                        <text x="890" y="330" fill="#94a3b8" font-size="16" text-anchor="start">0.5</text>

                                        <line x1="50" y1="366" x2="880" y2="366" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                        <text x="890" y="371" fill="#94a3b8" font-size="16" text-anchor="start">0.382</text>

                                        <line x1="50" y1="500" x2="880" y2="500" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                        <text x="890" y="505" fill="#94a3b8" font-size="16" font-weight="bold" text-anchor="start">0 (저점)</text>

                                        <line x1="50" y1="150" x2="880" y2="150" stroke="#ef4444" stroke-width="6" stroke-dasharray="14" />
                                        
                                        <path d="M 100 150 L 400 500" stroke="#ef4444" stroke-width="10" fill="none" stroke-linecap="round" />
                                        
                                        <path d="M 400 500 L 450 350 L 500 420 L 600 283" stroke="#f59e0b" stroke-width="10" fill="none" class="animate-draw" stroke-linejoin="round" stroke-linecap="round" />
                                        
                                        <path d="M 600 283 L 800 650" stroke="#ef4444" stroke-width="12" stroke-dasharray="18" fill="none" class="animate-draw" style="animation-delay: 1.5s;" stroke-linecap="round" />
                                        <circle cx="600" cy="283" r="20" fill="#ef4444" class="animate-pulse" />
                                        
                                        <text x="420" y="540" fill="#fca5a5" font-size="44" font-weight="900">A</text>
                                        <text x="560" y="240" fill="#fcd34d" font-size="44" font-weight="900">B</text>
                                        <text x="830" y="660" fill="#fca5a5" font-size="44" font-weight="900">C</text>

                                        <text x="80" y="120" fill="#f8fafc" font-size="32" font-weight="900">시작점</text>
                                        <text x="880" y="130" fill="#ef4444" font-size="28" font-weight="bold" text-anchor="end">A파 고점 (숏 절대 손절선)</text>
                                        
                                        <g transform="translate(630, 60)">
                                            <rect x="0" y="0" width="300" height="130" rx="20" fill="#450a0a" stroke="#ef4444" stroke-width="5" />
                                            <text x="150" y="55" fill="#fff" font-size="24" font-weight="bold" text-anchor="middle">피보나치 0.618 터치 확인</text>
                                            <text x="150" y="100" fill="#fca5a5" font-size="32" font-weight="900" text-anchor="middle">C파 숏(Short) 진입!</text>
                                        </g>
                                    </svg>
                                `
                            }
                        }
                    }
                }
            },
            "flat": {
                name: "플랫 (Flat)",
                types: {
                    "concept": {
                        name: "개념 및 특징",
                        items: {
                            "step1_concept": {
                                title: "1. 차트를 포함한 개념 설명",
                                content: "추세가 너무 강력하여, 가격 조정을 깊게 주지 못하고 옆으로 지루하게 기어가는 박스권 횡보형 조정 패턴(3-3-5 구조)입니다. 특이하게도 <strong>B파의 반등이 A파의 시작점(고점)을 뚫고 올라가는 경우</strong>가 빈번하게 발생합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <line x1="50" y1="150" x2="950" y2="150" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        <line x1="50" y1="300" x2="950" y2="300" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        
                                        <path d="M 100 150 L 160 260 L 230 200 L 300 300" stroke="#fcd34d" stroke-width="4" stroke-dasharray="8" fill="none" stroke-linejoin="round" />
                                        <path d="M 300 300 L 400 180 L 500 240 L 600 100" stroke="#fcd34d" stroke-width="4" stroke-dasharray="8" fill="none" stroke-linejoin="round" />
                                        <path d="M 600 100 L 660 220 L 720 170 L 780 280 L 840 230 L 900 350" stroke="#fcd34d" stroke-width="4" stroke-dasharray="8" fill="none" stroke-linejoin="round" />
                                        
                                        <path d="M 100 150 L 300 300 L 600 100 L 900 350" stroke="#f59e0b" stroke-width="10" fill="none" stroke-linejoin="round" opacity="0.8" />
                                        
                                        <text x="300" y="345" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">A (3파동)</text>
                                        <text x="600" y="60" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">B (3파동)</text>
                                        <text x="900" y="395" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">C (5파동)</text>
                                    </svg>
                                `
                            },
                            "step2_feature": {
                                title: "2. 파동 특징 및 거래량",
                                content: "지그재그에 비해 되돌림 폭이 얕고 기간이 깁니다. A파와 B파가 3파동 구조로 나타나며 지루한 횡보 랠리를 만듭니다.<br><br>📊 <strong>[거래량 특징]</strong> 패턴이 진행될수록 거래량은 점차 마릅니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                        <path d="M 100 150 L 300 300 L 600 100 L 900 350" stroke="#f59e0b" stroke-width="8" fill="none" stroke-linejoin="round" />
                                        
                                        <text x="300" y="340" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">A</text>
                                        <text x="600" y="70" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">B</text>
                                        <text x="900" y="390" fill="#f8fafc" font-size="32" font-weight="bold" text-anchor="middle">C</text>

                                        <line x1="50" y1="420" x2="950" y2="420" stroke="#334155" stroke-width="4" />
                                        <rect x="250" y="350" width="40" height="70" fill="#10b981" opacity="0.6" />
                                        <rect x="500" y="380" width="40" height="40" fill="#ef4444" opacity="0.5" />
                                        <rect x="750" y="400" width="40" height="20" fill="#10b981" opacity="0.4" />
                                        <path d="M 270 340 L 770 390" stroke="#ef4444" stroke-width="4" stroke-dasharray="8" fill="none" />
                                        <text x="500" y="445" fill="#fca5a5" font-size="20" font-weight="bold" text-anchor="middle">진행될수록 거래량 고갈</text>
                                    </svg>
                                `
                            },
                            "step3_location": {
                                title: "3. 출현 가능 위치",
                                content: "주로 추세가 강할 때 상승 중 잠시 쉬어가는 <strong>4파</strong>나 거대한 조정장 속 <strong>B파</strong>에서 단골로 등장합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        ${base8WaveDef}
                                        <path d="M 450 100 L 550 250" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <path d="M 800 300 L 880 180" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <g transform="translate(100, 580)">
                                            <rect x="0" y="0" width="800" height="90" rx="20" fill="#0f172a" stroke="#f59e0b" stroke-width="5" />
                                            <text x="400" y="55" fill="#fcd34d" font-size="32" font-weight="bold" text-anchor="middle">추세가 강할 때 쉬어가는 4파, B파에서 출현합니다.</text>
                                        </g>
                                    </svg>
                                `
                            }
                        }
                    },
                    "rules": {
                        name: "종류 및 실전 매매",
                        items: {
                            "rule_1": {
                                title: "4. 플랫 패턴의 3가지 종류",
                                content: "B파의 되돌림은 최소 A파의 90% 이상이어야 합니다. B파와 C파의 도달 위치에 따라 3가지로 나뉩니다.<br>① <strong>레귤러(Regular):</strong> B파와 C파가 각각 A파의 시작과 끝 부근에서 마감<br>② <strong>확장형(Expanded):</strong> B파가 고점 돌파, C파가 저점 이탈 (가장 흔함)<br>③ <strong>러닝(Running):</strong> B파 고점 돌파, 하지만 C파가 저점을 깨지 못함",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <line x1="333" y1="50" x2="333" y2="350" stroke="#334155" stroke-width="2" stroke-dasharray="6" />
                                        <line x1="666" y1="50" x2="666" y2="350" stroke="#334155" stroke-width="2" stroke-dasharray="6" />
                                        
                                        <line x1="20" y1="150" x2="980" y2="150" stroke="#475569" stroke-width="2" stroke-dasharray="4" />
                                        <line x1="20" y1="300" x2="980" y2="300" stroke="#475569" stroke-width="2" stroke-dasharray="4" />

                                        <text x="166" y="80" fill="#f8fafc" font-size="24" font-weight="bold" text-anchor="middle">① 레귤러 (Regular)</text>
                                        <path d="M 50 150 L 120 300 L 210 150 L 280 300" stroke="#f59e0b" stroke-width="6" fill="none" stroke-linejoin="round" />
                                        <text x="120" y="330" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">A</text>
                                        <text x="210" y="130" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">B</text>
                                        <text x="280" y="330" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">C</text>

                                        <text x="500" y="80" fill="#fca5a5" font-size="24" font-weight="bold" text-anchor="middle">② 확장형 (Expanded)</text>
                                        <path d="M 380 150 L 450 300 L 540 100 L 610 350" stroke="#ef4444" stroke-width="6" fill="none" stroke-linejoin="round" />
                                        <text x="450" y="330" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">A</text>
                                        <text x="540" y="80" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">B</text>
                                        <text x="610" y="380" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">C</text>

                                        <text x="833" y="80" fill="#6ee7b7" font-size="24" font-weight="bold" text-anchor="middle">③ 러닝 (Running)</text>
                                        <path d="M 710 150 L 780 300 L 870 100 L 940 230" stroke="#10b981" stroke-width="6" fill="none" stroke-linejoin="round" />
                                        <text x="780" y="330" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">A</text>
                                        <text x="870" y="80" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">B</text>
                                        <text x="940" y="260" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">C</text>
                                    </svg>
                                `
                            },
                            "strategy": {
                                title: "5. 실전 매매 전략 (B파 타점)",
                                content: "가장 흔하게 나오는 '확장형 플랫'은 고점과 저점을 모두 깨며 양방향 속임수를 줍니다. 여기서 가장 중요한 핵심은 <strong>B파가 절대 임펄스(5파)가 아닌 ABC(3파동) 구조로 억지로 고점을 넘긴다는 것</strong>입니다. 내부 파동이 ABC로 끝나는 것을 확인하고 <strong>C파 하락을 노리는 숏(Short) 진입</strong>이 최고의 승률을 가져옵니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        <line x1="50" y1="200" x2="950" y2="200" stroke="#475569" stroke-width="5" stroke-dasharray="12" />
                                        <line x1="50" y1="450" x2="950" y2="450" stroke="#475569" stroke-width="5" stroke-dasharray="12" />
                                        
                                        <path d="M 150 200 L 350 450" stroke="#f59e0b" stroke-width="10" fill="none" />
                                        
                                        <path d="M 350 450 L 430 250 L 520 330 L 600 100" stroke="#fcd34d" stroke-width="8" fill="none" stroke-linejoin="round" class="animate-draw" />
                                        
                                        <path d="M 600 100 L 850 600" stroke="#ef4444" stroke-width="12" fill="none" class="animate-draw" style="animation-delay: 1.5s;" stroke-linecap="round" />
                                        
                                        <text x="400" y="270" fill="#f8fafc" font-size="24" font-weight="bold">a</text>
                                        <text x="540" y="320" fill="#f8fafc" font-size="24" font-weight="bold">b</text>
                                        <text x="560" y="140" fill="#f8fafc" font-size="24" font-weight="bold">c</text>

                                        <text x="330" y="490" fill="#f8fafc" font-size="44" font-weight="bold">A</text>
                                        <text x="630" y="80" fill="#fcd34d" font-size="44" font-weight="900">B</text>
                                        <text x="860" y="650" fill="#fca5a5" font-size="44" font-weight="900">C</text>

                                        <circle cx="600" cy="100" r="20" fill="#ef4444" class="animate-pulse" />
                                        <g transform="translate(640, 40)">
                                            <rect x="0" y="0" width="320" height="90" rx="20" fill="#450a0a" stroke="#ef4444" stroke-width="5" />
                                            <text x="160" y="55" fill="#fca5a5" font-size="24" font-weight="bold" text-anchor="middle">ABC 마감 확인 ➔ 숏 진입!</text>
                                        </g>

                                        <text x="50" y="180" fill="#94a3b8" font-size="28" font-weight="bold">기존 고점 (A파 시작점)</text>
                                        <text x="50" y="430" fill="#94a3b8" font-size="28" font-weight="bold">A파 저점</text>
                                        
                                        <rect x="150" y="50" width="340" height="50" rx="10" fill="#1e293b" opacity="0.8" />
                                        <text x="320" y="82" fill="#6ee7b7" font-size="20" font-weight="bold" text-anchor="middle">💡 B파는 반드시 임펄스가 아닌 ABC 구조</text>
                                    </svg>
                                `
                            }
                        }
                    }
                }
            },
            "triangle": {
                name: "삼각 수렴 (Triangle)",
                types: {
                    "concept": {
                        name: "개념 및 특징",
                        items: {
                            "step1_concept": {
                                title: "1. 차트를 포함한 개념 설명",
                                content: "고점은 낮아지고 저점은 높아지며 방향을 결정하기 위해 에너지를 쥐어짜듯 응축하는 A-B-C-D-E (3-3-3-3-3 구조) 패턴입니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <path d="M 100 100 L 900 250" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        <path d="M 100 400 L 900 250" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        <path d="M 100 250 L 250 372 L 450 165 L 550 315 L 700 212 L 800 269" stroke="#f59e0b" stroke-width="8" fill="none" stroke-linejoin="round" />
                                        <text x="250" y="410" fill="#f8fafc" font-size="28" font-weight="bold" text-anchor="middle">A</text>
                                        <text x="450" y="140" fill="#f8fafc" font-size="28" font-weight="bold" text-anchor="middle">B</text>
                                        <text x="550" y="350" fill="#f8fafc" font-size="28" font-weight="bold" text-anchor="middle">C</text>
                                        <text x="700" y="190" fill="#f8fafc" font-size="28" font-weight="bold" text-anchor="middle">D</text>
                                        <text x="800" y="310" fill="#f8fafc" font-size="28" font-weight="bold" text-anchor="middle">E</text>
                                    </svg>
                                `
                            },
                            "step2_feature": {
                                title: "2. 파동 특징 및 거래량",
                                content: "방향을 터뜨리기 전 시간을 끌며 에너지를 모으는 전형적인 패턴입니다.<br><br>📊 <strong>[거래량 특징]</strong> 파동이 D파, E파로 수렴해 갈수록 거래량이 극단적으로 줄어들어 차트가 쥐죽은 듯 조용해지는 현상이 가장 확실한 증거입니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                        <path d="M 100 100 L 900 250" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        <path d="M 100 400 L 900 250" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        <path d="M 100 250 L 250 372 L 450 165 L 550 315 L 700 212 L 800 269" stroke="#f59e0b" stroke-width="6" fill="none" stroke-linejoin="round" opacity="0.6"/>
                                        <line x1="50" y1="420" x2="950" y2="420" stroke="#334155" stroke-width="4" />
                                        <rect x="230" y="320" width="40" height="100" fill="#10b981" />
                                        <rect x="430" y="350" width="40" height="70" fill="#ef4444" />
                                        <rect x="530" y="380" width="40" height="40" fill="#10b981" />
                                        <rect x="680" y="400" width="40" height="20" fill="#ef4444" />
                                        <rect x="780" y="410" width="40" height="10" fill="#10b981" />
                                        <path d="M 250 310 L 800 400" stroke="#ef4444" stroke-width="4" stroke-dasharray="8" fill="none" />
                                    </svg>
                                `
                            },
                            "step3_location": {
                                title: "3. 출현 가능 위치",
                                content: "<strong>절대로 전체 사이클의 2파에서는 나오지 않습니다.</strong> 오직 '마지막 파동 직전'인 <strong>4파</strong>, 또는 지그재그의 <strong>B파</strong> 등에서만 등장합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        ${base8WaveDef}
                                        <path d="M 450 100 L 550 250" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <path d="M 800 300 L 880 180" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <g class="blink-error">
                                            <line x1="160" y1="210" x2="240" y2="290" stroke="#ef4444" stroke-width="16" />
                                            <line x1="240" y1="210" x2="160" y2="290" stroke="#ef4444" stroke-width="16" />
                                            <text x="200" y="340" fill="#ef4444" font-size="32" font-weight="bold" text-anchor="middle">2파 절대 등장불가!</text>
                                        </g>
                                    </svg>
                                `
                            }
                        }
                    },
                    "rules": {
                        name: "절대 규칙 및 실전 매매",
                        items: {
                            "rule_1": {
                                title: "4. 절대 규칙 (내부 파동 및 거래량)",
                                content: "A, B, C, D, E 5개의 하위 파동으로 구성되며, 각각의 내부 파동은 예외 없이 3개의 파동(지그재그 형태)으로 이루어져야 합니다.<br><br>🚨 <strong>[거래량 절대 규칙]</strong> 수렴이 진행될수록 <strong>거래량은 반드시 점진적으로 감소</strong>해야 합니다. 만약 특정 방향의 추세선을 맞고 삼각수렴 추세선 내부로 들어온다고 해도, <strong>그 반등 구간에서 거래량이 크게 터졌다면 삼각수렴이 아닐(가짜 수렴) 가능성이 높습니다.</strong>",
                                svgChart: `
                                    <svg viewBox="0 0 1000 520" class="w-full h-full overflow-visible">
                                        <path d="M 100 100 L 900 250" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        <path d="M 100 400 L 900 250" stroke="#475569" stroke-width="4" stroke-dasharray="10" />
                                        
                                        <path d="M 100 250 L 250 372 L 450 165 L 550 315 L 700 212 L 800 269" stroke="#f59e0b" stroke-width="10" fill="none" stroke-linejoin="round" />
                                        
                                        <text x="500" y="50" fill="#fcd34d" font-size="28" font-weight="bold" text-anchor="middle">내부 3-3-3-3-3 구조 필수</text>

                                        <line x1="50" y1="490" x2="950" y2="490" stroke="#334155" stroke-width="4" />
                                        
                                        <rect x="230" y="390" width="40" height="100" fill="#10b981" opacity="0.8" />
                                        <rect x="430" y="420" width="40" height="70" fill="#ef4444" opacity="0.7" />
                                        <rect x="530" y="440" width="40" height="50" fill="#10b981" opacity="0.6" />
                                        <rect x="680" y="460" width="40" height="30" fill="#ef4444" opacity="0.5" />
                                        
                                        <path d="M 230 370 L 720 445" stroke="#10b981" stroke-width="4" stroke-dasharray="8" fill="none" />
                                        <text x="475" y="480" fill="#6ee7b7" font-size="20" font-weight="bold" text-anchor="middle">점진적 거래량 감소 (정상)</text>

                                        <rect x="780" y="340" width="40" height="150" fill="#ef4444" opacity="0.9" />
                                        <g transform="translate(730, 270)">
                                            <rect x="0" y="0" width="250" height="60" rx="10" fill="#450a0a" stroke="#ef4444" stroke-width="3" />
                                            <text x="125" y="25" fill="#fca5a5" font-size="16" font-weight="bold" text-anchor="middle">추세선 터치 시 거래량 폭발?</text>
                                            <text x="125" y="48" fill="#ef4444" font-size="18" font-weight="900" text-anchor="middle">🚨 가짜 수렴 (무효)</text>
                                        </g>
                                    </svg>
                                `
                            },
                            "strategy": {
                                title: "5. 실전 매매 전략",
                                content: "수렴 내부에서는 휩소가 많아 매매를 쉬는 것이 좋습니다. <strong>거래량이 완전히 바닥을 친 E파동 끝자락에서 추세선을 강하게 돌파(Break-out)하며 대량의 거래량이 터질 때</strong>, 그 방향으로 추세 추종 진입을 하는 것이 가장 승률이 높습니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        <line x1="50" y1="130" x2="850" y2="350" stroke="#475569" stroke-width="6" stroke-dasharray="10" />
                                        <line x1="50" y1="580" x2="850" y2="370" stroke="#475569" stroke-width="6" stroke-dasharray="10" />
                                        
                                        <path d="M 100 230 L 250 527 L 400 226 L 550 449 L 650 295 L 730 401" stroke="#f59e0b" stroke-width="8" fill="none" class="animate-draw" stroke-linejoin="round" stroke-linecap="round" />
                                        
                                        <path d="M 730 401 L 950 120" stroke="#10b981" stroke-width="12" stroke-dasharray="16" fill="none" class="animate-draw" style="animation-delay: 2s;" stroke-linecap="round" />
                                        <circle cx="773" cy="328" r="20" fill="#10b981" class="animate-pulse" style="animation-delay: 2s;" />
                                        
                                        <g transform="translate(480, 500)">
                                            <rect x="0" y="0" width="400" height="130" rx="20" fill="#064e3b" stroke="#10b981" stroke-width="5" />
                                            <text x="200" y="55" fill="#fff" font-size="32" font-weight="bold" text-anchor="middle">추세선 상향 돌파 시!</text>
                                            <text x="200" y="105" fill="#6ee7b7" font-size="36" font-weight="900" text-anchor="middle">추세 추종 롱 진입</text>
                                        </g>

                                        <text x="250" y="575" fill="#fcd34d" font-size="44" font-weight="bold" text-anchor="middle">A</text>
                                        <text x="400" y="200" fill="#fcd34d" font-size="44" font-weight="bold" text-anchor="middle">B</text>
                                        <text x="550" y="500" fill="#fcd34d" font-size="44" font-weight="bold" text-anchor="middle">C</text>
                                        <text x="650" y="270" fill="#fcd34d" font-size="44" font-weight="bold" text-anchor="middle">D</text>
                                        <text x="730" y="450" fill="#fcd34d" font-size="44" font-weight="bold" text-anchor="middle">E</text>
                                    </svg>
                                `
                            }
                        }
                    }
                }
            },
            "complex": {
                name: "복합 조정 (WXY)",
                types: {
                    "concept": {
                        name: "개념 및 특징",
                        items: {
                            "step1_concept": {
                                title: "1. 차트를 포함한 개념 설명",
                                content: "복합 조정은 둘 이상의 단순 조정 패턴이 <strong>'X파(연결파)'</strong>로 결합된 구조입니다. 가격 조정보다는 시간을 길게 끌며 방향성을 지우는 것이 핵심입니다.<br>• <strong>기본형 (W-X-Y):</strong> 두 개의 조정 패턴 연결 (예: 지그재그 + 플랫)<br>• <strong>확장형 (W-X-Y-X-Z):</strong> 세 개의 조정 패턴 연결",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <rect x="50" y="50" width="300" height="300" fill="#3b82f6" opacity="0.1" rx="8" />
                                        <rect x="370" y="50" width="150" height="300" fill="#ef4444" opacity="0.1" rx="8" />
                                        <rect x="540" y="50" width="410" height="300" fill="#10b981" opacity="0.1" rx="8" />

                                        <path d="M 50 100 L 150 300 L 250 200 L 350 350" stroke="#3b82f6" stroke-width="8" fill="none" stroke-linejoin="round" />
                                        <text x="200" y="380" fill="#3b82f6" font-size="24" font-weight="bold" text-anchor="middle">W (지그재그)</text>

                                        <path d="M 350 350 L 445 250 L 540 150" stroke="#ef4444" stroke-width="6" fill="none" stroke-dasharray="10" stroke-linejoin="round" />
                                        <text x="445" y="380" fill="#ef4444" font-size="24" font-weight="bold" text-anchor="middle">X (연결파)</text>

                                        <path d="M 540 150 L 640 320 L 740 120 L 950 320" stroke="#10b981" stroke-width="8" fill="none" stroke-linejoin="round" />
                                        <text x="745" y="380" fill="#10b981" font-size="24" font-weight="bold" text-anchor="middle">Y (플랫)</text>
                                    </svg>
                                `
                            },
                            "step2_feature": {
                                title: "2. 파동 특징 및 거래량",
                                content: "가격을 깊게 내리지 않고 수평 채널 안에서 잔파동을 만들며 시간을 소모합니다.<br><br>📊 <strong>[거래량 특징]</strong> 방향성이 상실됨에 따라 패턴이 진행될수록 전체적인 거래량 볼륨이 점진적으로 축소됩니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                        <rect x="50" y="100" width="900" height="160" fill="#334155" opacity="0.2" />
                                        <line x1="50" y1="100" x2="950" y2="100" stroke="#475569" stroke-width="3" stroke-dasharray="8" />
                                        <line x1="50" y1="260" x2="950" y2="260" stroke="#475569" stroke-width="3" stroke-dasharray="8" />
                                        
                                        <path d="M 50 150 L 150 250 L 250 120 L 350 240 L 450 130 L 550 250 L 650 140 L 750 240 L 850 130 L 950 250" stroke="#f59e0b" stroke-width="6" fill="none" stroke-linejoin="round" />
                                        
                                        <line x1="50" y1="420" x2="950" y2="420" stroke="#334155" stroke-width="4" />
                                        <rect x="150" y="350" width="30" height="70" fill="#10b981" opacity="0.7" />
                                        <rect x="350" y="370" width="30" height="50" fill="#ef4444" opacity="0.6" />
                                        <rect x="550" y="390" width="30" height="30" fill="#10b981" opacity="0.5" />
                                        <rect x="750" y="405" width="30" height="15" fill="#ef4444" opacity="0.4" />
                                        
                                        <path d="M 165 340 L 765 400" stroke="#94a3b8" stroke-width="3" stroke-dasharray="6" fill="none" />
                                        <text x="450" y="455" fill="#64748b" font-size="20" font-weight="bold" text-anchor="middle">시간이 지날수록 거래량 지속 축소</text>
                                    </svg>
                                `
                            },
                            "step3_location": {
                                title: "3. 출현 가능 위치",
                                content: "주로 <strong>2파, 4파, B파</strong> 구간에서 단순 조정만으로 시장의 열기가 충분히 식지 않았을 때, 기간 조정을 주기 위해 출현합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        ${base8WaveDef}
                                        <path d="M 150 250 L 250 350" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <path d="M 450 100 L 550 250" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        <path d="M 800 300 L 880 180" stroke="#f59e0b" stroke-width="12" fill="none" class="blink-active" stroke-linecap="round" />
                                        
                                        <g transform="translate(100, 580)">
                                            <rect x="0" y="0" width="800" height="90" rx="20" fill="#0f172a" stroke="#f59e0b" stroke-width="4" />
                                            <text x="400" y="55" fill="#fcd34d" font-size="28" font-weight="bold" text-anchor="middle">2파, 4파, B파 (시간 조정을 주는 위치)</text>
                                        </g>
                                    </svg>
                                `
                            }
                        }
                    },
                    "rules": {
                        name: "절대 규칙 및 실전 매매",
                        items: {
                            "rule_1": {
                                title: "4. 절대 규칙 (X파와 삼각형의 제약)",
                                content: "카운팅 오류를 방지하는 2가지 핵심 규칙입니다.<br>① <strong>X파 방향:</strong> X파는 W파 하락 이후 반드시 반대 방향(기존 추세 방향)으로 반등해야 합니다.<br>② <strong>삼각형 위치:</strong> 삼각수렴은 복합조정의 <strong>마지막 파동(Y 또는 Z)</strong> 자리에서만 제한적으로 등장합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                        <line x1="50" y1="100" x2="950" y2="100" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                        
                                        <path d="M 50 100 L 250 350" stroke="#3b82f6" stroke-width="8" fill="none" stroke-linecap="round" />
                                        
                                        <path d="M 250 350 L 430 180" stroke="#ef4444" stroke-width="8" fill="none" stroke-dasharray="10" stroke-linecap="round" />
                                        <polygon points="430,180 410,200 450,200" fill="#ef4444" transform="rotate(45 430 180)" />
                                        
                                        <path d="M 450 150 L 530 330 L 600 200 L 660 300 L 710 230 L 760 280" stroke="#10b981" stroke-width="6" fill="none" stroke-linejoin="round" />
                                        <line x1="450" y1="150" x2="780" y2="250" stroke="#10b981" stroke-width="3" stroke-dasharray="6" />
                                        <line x1="530" y1="330" x2="780" y2="270" stroke="#10b981" stroke-width="3" stroke-dasharray="6" />

                                        <text x="120" y="250" fill="#3b82f6" font-size="32" font-weight="bold">W</text>
                                        <text x="320" y="290" fill="#ef4444" font-size="32" font-weight="bold">X (반등 연결)</text>
                                        
                                        <g transform="translate(680, 40)">
                                            <rect x="0" y="0" width="280" height="90" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="3" />
                                            <text x="140" y="40" fill="#6ee7b7" font-size="20" font-weight="bold" text-anchor="middle">마지막 파동 Y (또는 Z)</text>
                                            <text x="140" y="70" fill="#fff" font-size="22" font-weight="900" text-anchor="middle">삼각수렴 출현 가능 🟢</text>
                                        </g>
                                    </svg>
                                `
                            },
                            "strategy": {
                                title: "5. 실전 매매 전략 (채널 핑퐁 매매)",
                                content: "복합 조정에서는 섣부른 돌파 추종 매매보다 <strong>채널 상·하단 반응 매매</strong>가 유리합니다. 채널 상/하단에 닿을 때만 짧게 역추세 진입(스캘핑)을 하고, 채널 중앙부에서는 포지션을 비우고 관망해야 휩소를 피할 수 있습니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        <line x1="50" y1="150" x2="950" y2="150" stroke="#475569" stroke-width="6" />
                                        <line x1="50" y1="550" x2="950" y2="550" stroke="#475569" stroke-width="6" />
                                        
                                        <path d="M 80 150 L 200 550 L 350 150 L 500 550 L 650 150 L 800 550" stroke="#f59e0b" stroke-width="8" fill="none" stroke-linejoin="round" />
                                        
                                        <rect x="50" y="250" width="900" height="200" fill="#1e293b" opacity="0.4" />
                                        <text x="500" y="360" fill="#94a3b8" font-size="32" font-weight="bold" text-anchor="middle">채널 중앙 = 잦은 휩소 구간 (관망 💤)</text>

                                        <circle cx="350" cy="150" r="16" fill="#ef4444" class="animate-pulse" />
                                        <text x="350" y="110" fill="#fca5a5" font-size="24" font-weight="bold" text-anchor="middle">상단 저항 (Short ↓)</text>
                                        
                                        <circle cx="650" cy="150" r="16" fill="#ef4444" class="animate-pulse" style="animation-delay: 1s;" />
                                        <text x="650" y="110" fill="#fca5a5" font-size="24" font-weight="bold" text-anchor="middle">상단 저항 (Short ↓)</text>

                                        <circle cx="200" cy="550" r="16" fill="#10b981" class="animate-pulse" style="animation-delay: 0.5s;" />
                                        <text x="200" y="610" fill="#6ee7b7" font-size="24" font-weight="bold" text-anchor="middle">하단 지지 (Long ↑)</text>
                                        
                                        <circle cx="500" cy="550" r="16" fill="#10b981" class="animate-pulse" style="animation-delay: 1.5s;" />
                                        <text x="500" y="610" fill="#6ee7b7" font-size="24" font-weight="bold" text-anchor="middle">하단 지지 (Long ↑)</text>
                                        
                                        <circle cx="800" cy="550" r="16" fill="#10b981" class="animate-pulse" style="animation-delay: 2.5s;" />
                                        <text x="800" y="610" fill="#6ee7b7" font-size="24" font-weight="bold" text-anchor="middle">하단 지지 (Long ↑)</text>
                                    </svg>
                                `
                            }
                        }
                    }
                }
            }
        }
    },
    "guidelines": {
            name: "핵심 가이드라인",
            waves: {
                "alternation": {
                    name: "파동의 교대 법칙",
                    types: {
                        "concept": {
                            name: "개념 및 실전 활용",
                            items: {
                                "step1_core": {
                                    title: "1. 핵심 개념 (2파 vs 4파의 대비)",
                                    content: "임펄스 파동 내에서 <strong>2번 파동과 4번 파동은 그 형태와 깊이가 서로 다르게(교대로) 나타나는 경향</strong>이 있습니다. 2파가 가파르고 단순하게 하락하면, 4파는 얕고 복잡하게 횡보합니다.",
                                    svgChart: `
                                        <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                            <line x1="50" y1="250" x2="950" y2="250" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                            <text x="50" y="240" fill="#94a3b8" font-size="16" font-weight="bold">1파 고점</text>

                                            <path d="M 100 400 L 250 250" stroke="#10b981" stroke-width="6" fill="none" stroke-linecap="round" />
                                            
                                            <path d="M 250 250 L 330 360" stroke="#ef4444" stroke-width="8" fill="none" stroke-linejoin="round" />
                                            
                                            <path d="M 330 360 L 600 100" stroke="#10b981" stroke-width="6" fill="none" stroke-linejoin="round" />
                                            
                                            <path d="M 600 100 L 640 180 L 690 120 L 740 190 L 790 140" stroke="#f59e0b" stroke-width="8" fill="none" stroke-linejoin="round" />
                                            
                                            <path d="M 790 140 L 900 50" stroke="#10b981" stroke-width="6" fill="none" stroke-linecap="round" />

                                            <rect x="230" y="230" width="120" height="150" fill="#ef4444" opacity="0.1" rx="8" />
                                            <text x="290" y="220" fill="#ef4444" font-size="24" font-weight="bold" text-anchor="middle">2파</text>
                                            <text x="290" y="400" fill="#fca5a5" font-size="18" font-weight="bold" text-anchor="middle">깊고 단순</text>

                                            <rect x="580" y="80" width="230" height="130" fill="#f59e0b" opacity="0.1" rx="8" />
                                            <text x="695" y="70" fill="#f59e0b" font-size="24" font-weight="bold" text-anchor="middle">4파</text>
                                            <text x="695" y="230" fill="#fcd34d" font-size="18" font-weight="bold" text-anchor="middle">얕고 복잡(횡보)</text>
                                        </svg>
                                    `
                                },
                                "step2_action": {
                                    title: "2. 실전 매매 적용 (멘탈 관리)",
                                    content: "<strong>[조건]</strong> 2파가 가파른 가격 조정(지그재그)으로 공포를 주며 끝난 것을 확인했다면?<br><strong>[행동]</strong> 다가올 4파 구간은 위아래 휩소가 심한 지루한 횡보장일 확률이 높습니다. <strong>무리한 돌파 추종 매매를 자제하고 관망하며 5파 상승을 기다려야 합니다.</strong>",
                                    svgChart: `
                                        <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                            <line x1="50" y1="200" x2="950" y2="200" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                            
                                            <path d="M 100 350 L 250 200" stroke="#10b981" stroke-width="6" fill="none" opacity="0.5" />
                                            <path d="M 250 200 L 330 320" stroke="#ef4444" stroke-width="8" fill="none" />
                                            <circle cx="330" cy="320" r="12" fill="#ef4444" />
                                            <text x="330" y="360" fill="#ef4444" font-size="22" font-weight="bold" text-anchor="middle">조건: 2파 급락 확인</text>

                                            <path d="M 330 320 L 550 80" stroke="#10b981" stroke-width="6" fill="none" opacity="0.5" />
                                            
                                            <path d="M 550 80 L 600 160 L 650 100 L 700 170 L 750 120" stroke="#f59e0b" stroke-width="8" fill="none" stroke-linejoin="round" />
                                            
                                            <g transform="translate(560, 220)">
                                                <rect x="0" y="0" width="350" height="90" rx="16" fill="#450a0a" stroke="#ef4444" stroke-width="4" />
                                                <text x="175" y="40" fill="#fca5a5" font-size="22" font-weight="bold" text-anchor="middle">예측: 4파는 횡보장 유력</text>
                                                <text x="175" y="75" fill="#fff" font-size="26" font-weight="900" text-anchor="middle">행동: 돌파 추종 자제 (관망)</text>
                                            </g>
                                        </svg>
                                    `
                                }
                            }
                        }
                    }
                },
                "equality": {
                    name: "파동 균등의 법칙",
                    types: {
                        "concept": {
                            name: "개념 및 실전 활용",
                            items: {
                                "step1_core": {
                                    title: "1. 핵심 도식 (1파 = 5파)",
                                    content: "임펄스 상승 시 <strong>3파가 가장 길게 연장되었다면, 나머지 1파와 5파의 수직 상승 길이가 거의 1:1로 비슷해지는 현상</strong>이 자주 관찰됩니다.",
                                    svgChart: `
                                        <svg viewBox="0 0 1000 500" class="w-full h-full overflow-visible">
                                            <line x1="50" y1="300" x2="950" y2="300" stroke="#475569" stroke-width="2" stroke-dasharray="6" />

                                            <rect x="180" y="300" width="20" height="150" fill="#fcd34d" opacity="0.8" />
                                            <path d="M 100 450 L 200 300" stroke="#10b981" stroke-width="8" fill="none" stroke-linecap="round" />
                                            <text x="160" y="380" fill="#fcd34d" font-size="24" font-weight="bold" text-anchor="end">1파 길이</text>

                                            <path d="M 200 300 L 260 380" stroke="#ef4444" stroke-width="6" fill="none" stroke-linejoin="round" />

                                            <path d="M 260 380 L 600 100" stroke="#10b981" stroke-width="6" fill="none" stroke-linejoin="round" />
                                            <text x="430" y="200" fill="#94a3b8" font-size="24" font-weight="bold" text-anchor="middle">3파 (가장 긴 연장)</text>

                                            <path d="M 600 100 L 680 200" stroke="#ef4444" stroke-width="6" fill="none" stroke-linejoin="round" />

                                            <rect x="670" y="50" width="20" height="150" fill="#fca5a5" opacity="0.8" />
                                            <path d="M 680 200 L 780 50" stroke="#10b981" stroke-width="8" fill="none" stroke-linecap="round" />
                                            
                                            <path d="M 220 375 Q 450 100 650 125" stroke="#64748b" stroke-width="3" stroke-dasharray="8" fill="none" />
                                            <polygon points="650,125 635,115 635,135" fill="#64748b" />
                                            
                                            <text x="710" y="130" fill="#fca5a5" font-size="24" font-weight="bold" text-anchor="start">1파 길이 복사 (1:1)</text>
                                        </svg>
                                    `
                                },
                                "step2_action": {
                                    title: "2. 실전 매매 적용 (익절가 산출)",
                                    content: "<strong>[조건]</strong> 3파 연장 확인 후, 4파 저점이 1파 고점을 깨지 않고 반등을 시작했다면?<br><strong>[행동]</strong> <strong>1파의 수직 상승폭을 측정하여 4파 저점에 더한 가격</strong>을 5파 상승의 완벽한 <strong>지정가 익절(Take Profit) 타겟</strong>으로 설정합니다.",
                                    svgChart: `
                                        <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                            <line x1="50" y1="280" x2="950" y2="280" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                            
                                            <path d="M 50 400 L 150 280 L 210 350 L 500 100 L 580 200" stroke="#64748b" stroke-width="6" fill="none" stroke-linejoin="round" opacity="0.5"/>
                                            
                                            <circle cx="580" cy="200" r="12" fill="#10b981" />
                                            <text x="580" y="240" fill="#10b981" font-size="20" font-weight="bold" text-anchor="middle">4파 반등 시작</text>

                                            <rect x="135" y="280" width="10" height="120" fill="#fcd34d" />
                                            
                                            <rect x="565" y="80" width="10" height="120" fill="#fca5a5" />
                                            <path d="M 580 200 L 680 80" stroke="#10b981" stroke-width="8" fill="none" stroke-linecap="round" stroke-dasharray="12" class="animate-draw" />
                                            
                                            <line x1="550" y1="80" x2="900" y2="80" stroke="#ef4444" stroke-width="4" stroke-dasharray="8" />
                                            <circle cx="680" cy="80" r="16" fill="#ef4444" class="animate-pulse" />
                                            
                                            <g transform="translate(620, 110)">
                                                <rect x="0" y="0" width="280" height="80" rx="12" fill="#450a0a" stroke="#ef4444" stroke-width="3" />
                                                <text x="140" y="35" fill="#fca5a5" font-size="20" font-weight="bold" text-anchor="middle">산출된 5파 목표가</text>
                                                <text x="140" y="65" fill="#fff" font-size="24" font-weight="900" text-anchor="middle">지정가 익절(TP) 🎯</text>
                                            </g>
                                        </svg>
                                    `
                                }
                            }
                        }
                    }
                },
                "fibonacci": {
                    name: "피보나치 (Fibonacci)",
                    types: {
                        "concept": {
                            name: "개념 및 실전 활용",
                            items: {
                                "step1_core": {
                                    title: "1. 파동별 핵심 비율 도식",
                                    content: "피보나치 비율은 파동의 눌림(조정)과 확장(목표) 레벨을 산출하는 핵심 도구입니다. 임펄스 파동에서 가장 빈번하게 관찰되는 <strong>3가지 주요 비율</strong>입니다.",
                                    svgChart: `
                                        <svg viewBox="0 0 1000 400" class="w-full h-full overflow-visible">
                                            <line x1="333" y1="50" x2="333" y2="350" stroke="#334155" stroke-width="2" stroke-dasharray="6" />
                                            <line x1="666" y1="50" x2="666" y2="350" stroke="#334155" stroke-width="2" stroke-dasharray="6" />

                                            <text x="166" y="80" fill="#f8fafc" font-size="24" font-weight="bold" text-anchor="middle">2파 눌림</text>
                                            <path d="M 60 300 L 80 250 L 100 270 L 130 150 L 150 170 L 180 100" stroke="#10b981" stroke-width="3" stroke-dasharray="4" fill="none" />
                                            <path d="M 60 300 L 180 100 L 260 223" stroke="#10b981" stroke-width="6" fill="none" stroke-linejoin="round" />
                                            
                                            <line x1="60" y1="223" x2="280" y2="223" stroke="#ef4444" stroke-width="4" />
                                            <text x="166" y="260" fill="#ef4444" font-size="24" font-weight="bold" text-anchor="middle">0.618 되돌림</text>

                                            <text x="500" y="80" fill="#f8fafc" font-size="24" font-weight="bold" text-anchor="middle">3파 확장</text>
                                            <path d="M 400 300 L 460 220 L 500 250 L 600 100" stroke="#10b981" stroke-width="6" fill="none" stroke-linejoin="round" />
                                            <line x1="400" y1="100" x2="620" y2="100" stroke="#f59e0b" stroke-width="4" />
                                            <text x="500" y="135" fill="#f59e0b" font-size="24" font-weight="bold" text-anchor="middle">1.618 확장</text>

                                            <text x="833" y="80" fill="#f8fafc" font-size="24" font-weight="bold" text-anchor="middle">4파 눌림</text>
                                            <line x1="700" y1="260" x2="950" y2="260" stroke="#475569" stroke-width="2" stroke-dasharray="4" />
                                            <path d="M 720 300 L 760 260 L 800 280 L 850 120 L 920 188" stroke="#10b981" stroke-width="6" fill="none" stroke-linejoin="round" />
                                            <line x1="720" y1="188" x2="940" y2="188" stroke="#3b82f6" stroke-width="4" />
                                            <text x="833" y="225" fill="#3b82f6" font-size="24" font-weight="bold" text-anchor="middle">0.382 되돌림</text>
                                        </svg>
                                    `
                                },
                                "step2_action": {
                                    title: "2. 실전 매매 적용 (0.618 눌림목 진입)",
                                    content: "<strong>[조건]</strong> 하락 추세를 돌파하는 명확한 1파 상승(내부 5파동 구조)이 완성되고 조정을 받기 시작했다면?<br><strong>[행동]</strong> 가장 신뢰도가 높은 반등 타점인 <strong>피보나치 0.618 되돌림 레벨에 지정가 롱(Long) 주문을 대기</strong>시키는 것이 훌륭한 손익비 전략입니다.",
                                    svgChart: `
                                        <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                            <line x1="50" y1="50" x2="950" y2="50" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                            <text x="50" y="40" fill="#94a3b8" font-size="18">1 (고점)</text>
                                            
                                            <line x1="50" y1="350" x2="950" y2="350" stroke="#475569" stroke-width="2" stroke-dasharray="6" />
                                            <text x="50" y="340" fill="#94a3b8" font-size="18">0 (시작)</text>
                                            
                                            <line x1="50" y1="235" x2="950" y2="235" stroke="#ef4444" stroke-width="4" />
                                            <text x="50" y="225" fill="#ef4444" font-size="22" font-weight="bold">0.618 (핵심 지지선)</text>

                                            <path d="M 150 350 L 200 200 L 250 250 L 350 100 L 400 150 L 450 50" stroke="#fcd34d" stroke-width="3" stroke-dasharray="6" fill="none" />
                                            <path d="M 150 350 L 450 50" stroke="#10b981" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.8"/>
                                            <text x="250" y="180" fill="#10b981" font-size="24" font-weight="bold">1파 완성 확인</text>

                                            <path d="M 450 50 L 650 235" stroke="#ef4444" stroke-width="8" fill="none" stroke-linejoin="round" class="animate-draw" />
                                            <circle cx="650" cy="235" r="16" fill="#fcd34d" class="animate-pulse" style="animation-delay: 1s;" />
                                            
                                            <g transform="translate(680, 180)">
                                                <rect x="0" y="0" width="280" height="80" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="3" />
                                                <text x="140" y="35" fill="#6ee7b7" font-size="20" font-weight="bold" text-anchor="middle">조건 달성 (0.618 터치)</text>
                                                <text x="140" y="65" fill="#fff" font-size="22" font-weight="900" text-anchor="middle">지정가 롱(Long) 체결 🚀</text>
                                            </g>
                                        </svg>
                                    `
                                }
                            }
                        }
                    }
                }
            }
        },
    "advanced": {
        name: "파동 분석 치트키",
        waves: {
            "rsi_divergence": {
                name: "RSI 다이버전스 활용",
                types: {
                    "concept": {
                        name: "개념 및 확인 위치",
                        items: {
                            "step1_core": {
                                title: "1. 핵심 개념 (RSI와 다이버전스란?)",
                                content: "<strong>RSI</strong>는 가격 상승·하락의 힘(모멘텀)이 얼마나 강한지 보여주는 보조지표입니다. <strong>다이버전스(Divergence)</strong>는 가격은 고점을 높이며 계속 오르는데 RSI는 고점을 낮추며 떨어지는 등, <strong>'가격의 방향과 힘의 방향이 서로 어긋나는 현상'</strong>을 말합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                        <line x1="50" y1="250" x2="950" y2="250" stroke="#334155" stroke-width="2" stroke-dasharray="6" />
                                        <text x="50" y="40" fill="#94a3b8" font-size="20" font-weight="bold">가격 (Price)</text>
                                        <text x="50" y="280" fill="#94a3b8" font-size="20" font-weight="bold">RSI (힘의 강도)</text>

                                        <path d="M 150 180 L 250 80 L 350 140 L 500 40" stroke="#10b981" stroke-width="6" fill="none" stroke-linejoin="round" />
                                        <circle cx="250" cy="80" r="10" fill="#10b981" />
                                        <circle cx="500" cy="40" r="10" fill="#10b981" />
                                        <path d="M 250 80 L 500 40" stroke="#10b981" stroke-width="4" stroke-dasharray="8" fill="none" />
                                        
                                        <text x="250" y="55" fill="#f8fafc" font-size="22" font-weight="bold" text-anchor="middle">3파 고점</text>
                                        <text x="500" y="20" fill="#f8fafc" font-size="22" font-weight="bold" text-anchor="middle">5파 고점</text>
                                        <text x="375" y="50" fill="#10b981" font-size="20" font-weight="bold" text-anchor="middle">가격은 높아짐 ↗</text>

                                        <path d="M 150 400 L 250 310 L 350 370 L 500 350" stroke="#a855f7" stroke-width="6" fill="none" stroke-linejoin="round" />
                                        <circle cx="250" cy="310" r="10" fill="#a855f7" />
                                        <circle cx="500" cy="350" r="10" fill="#a855f7" />
                                        <path d="M 250 310 L 500 350" stroke="#ef4444" stroke-width="4" stroke-dasharray="8" fill="none" />
                                        
                                        <text x="375" y="320" fill="#ef4444" font-size="20" font-weight="bold" text-anchor="middle">RSI(힘)는 낮아짐 ↘</text>
                                        
                                        <g transform="translate(620, 120)">
                                            <rect x="0" y="0" width="330" height="110" rx="16" fill="#1e293b" stroke="#64748b" stroke-width="3" />
                                            <text x="165" y="45" fill="#f8fafc" font-size="22" font-weight="bold" text-anchor="middle">가격 상승 + 힘(RSI) 하락</text>
                                            <text x="165" y="85" fill="#fca5a5" font-size="24" font-weight="bold" text-anchor="middle">"상승 추세가 끝물이다!"</text>
                                        </g>
                                    </svg>
                                `
                            },
                            "step2_location": {
                                title: "2. 확인 위치 (어디서 찾는가?)",
                                content: "모든 구간에서 다이버전스를 찾을 필요는 없습니다. 엘리어트 파동에서는 상승 추세가 끝나는 <strong>임펄스 5파의 끝</strong>이나 조정이 끝나는 <strong>지그재그 C파의 끝</strong>에서 확인할 때 가장 신뢰도가 높습니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 700" class="w-full h-full overflow-visible">
                                        ${base8WaveDef}
                                        
                                        <circle cx="700" cy="50" r="16" fill="#ef4444" class="animate-pulse" />
                                        <g transform="translate(520, 10)">
                                            <rect x="0" y="0" width="160" height="40" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="2" />
                                            <text x="80" y="27" fill="#fca5a5" font-size="18" font-weight="bold" text-anchor="middle">5파 끝 (RSI 확인)</text>
                                        </g>
                                        <path d="M 680 30 L 695 45" stroke="#ef4444" stroke-width="2" fill="none" />

                                        <circle cx="950" cy="370" r="16" fill="#ef4444" class="animate-pulse" style="animation-delay: 1s;" />
                                        <g transform="translate(730, 410)">
                                            <rect x="0" y="0" width="160" height="40" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="2" />
                                            <text x="80" y="27" fill="#fca5a5" font-size="18" font-weight="bold" text-anchor="middle">C파 끝 (RSI 확인)</text>
                                        </g>
                                        <path d="M 890 430 L 950 370" stroke="#ef4444" stroke-width="2" fill="none" />
                                    </svg>
                                `
                            }
                        }
                    },
                    "rules": {
                        name: "실전 매매 대응",
                        items: {
                            "strategy": {
                                title: "3. 실전 활용 (리스크 관리)",
                                content: "다이버전스는 무조건적인 숏(Short) 진입 신호가 아니라 <strong>'추세가 약해졌다는 경고'</strong>입니다. <strong>[1단계] 다이버전스 발생 시 기존 롱(Long)을 분할 익절</strong>하고, <strong>[2단계] 추세선 이탈 등 구조 붕괴가 눈으로 확인된 후 보수적으로 숏을 검토</strong>하는 것이 안전합니다.",
                                svgChart: `
                                    <svg viewBox="0 0 1000 450" class="w-full h-full overflow-visible">
                                        <line x1="500" y1="50" x2="500" y2="400" stroke="#334155" stroke-width="2" stroke-dasharray="6" />

                                        <text x="250" y="40" fill="#f8fafc" font-size="24" font-weight="bold" text-anchor="middle">1단계: 다이버전스 발생</text>
                                        
                                        <path d="M 50 350 L 150 200 L 250 260 L 400 120" stroke="#10b981" stroke-width="6" fill="none" stroke-linejoin="round" />
                                        <circle cx="400" cy="120" r="14" fill="#f59e0b" class="animate-pulse" />
                                        <line x1="50" y1="350" x2="430" y2="190" stroke="#475569" stroke-width="4" stroke-dasharray="8" />
                                        
                                        <g transform="translate(110, 60)">
                                            <rect x="0" y="0" width="280" height="60" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="3" />
                                            <text x="140" y="37" fill="#fcd34d" font-size="20" font-weight="bold" text-anchor="middle">행동 ➔ 롱(Long) 분할 익절</text>
                                        </g>

                                        <text x="750" y="40" fill="#f8fafc" font-size="24" font-weight="bold" text-anchor="middle">2단계: 추세선 이탈 확인</text>
                                        
                                        <path d="M 550 350 L 650 200 L 750 260 L 850 120" stroke="#64748b" stroke-width="6" fill="none" stroke-linejoin="round" opacity="0.5"/>
                                        <line x1="550" y1="350" x2="950" y2="180" stroke="#475569" stroke-width="4" stroke-dasharray="8" />
                                        
                                        <path d="M 850 120 L 900 280 L 970 220" stroke="#ef4444" stroke-width="6" fill="none" stroke-linejoin="round" class="animate-draw" />
                                        <circle cx="900" cy="280" r="14" fill="#ef4444" class="animate-pulse" style="animation-delay: 1s;" />
                                        <text x="890" y="320" fill="#ef4444" font-size="18" font-weight="bold">추세선 이탈!</text>

                                        <g transform="translate(610, 60)">
                                            <rect x="0" y="0" width="280" height="60" rx="10" fill="#450a0a" stroke="#ef4444" stroke-width="3" />
                                            <text x="140" y="37" fill="#fca5a5" font-size="20" font-weight="bold" text-anchor="middle">행동 ➔ 보수적 숏(Short) 검토</text>
                                        </g>
                                    </svg>
                                `
                            }
                        }
                    }
                }
            }
        }
    }
};