import {
  Activity,
  ArrowRight,
  CircuitBoard,
  Database,
  LockKeyhole,
  Server,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
export function HeroVisual() {
  return (
    <div
      className="system-visual"
      role="img"
      aria-label="Software system illustration: an interface connects to APIs and persistent data"
    >
      <div className="visual-heading">
        <span className="tiny-dot" /> THE ENGINEERING PERSPECTIVE{" "}
        <span>FIG. 01</span>
      </div>
      <div className="system-orbit">
        <div className="orbit-line one" />
        <div className="orbit-line two" />
        <div className="system-node node-data">
          <Database />
          <span>Data</span>
          <small>COLLECT & STRUCTURE</small>
        </div>
        <div className="system-node node-core">
          <span className="core-mark">ak.</span>
          <small>BUILD WITH PURPOSE</small>
        </div>
        <div className="system-node node-api">
          <Server />
          <span>Systems</span>
          <small>CONNECT & PROCESS</small>
        </div>
        <div className="system-node node-ai">
          <Sparkles />
          <span>Interface</span>
          <small>INTERACT & EXPLORE</small>
        </div>
      </div>
      <div className="visual-bottom">
        <span>Thoughtful architecture. Useful outcomes.</span>
        <span>01 — 03</span>
      </div>
    </div>
  );
}
export function ProjectVisual({ id }: { id: string }) {
  if (id === "smart-twin")
    return (
      <div className="project-visual twin">
        <div className="diagram-top">
          <span>SMART TWIN / SYSTEM ARCHITECTURE</span>
          <Activity size={17} />
        </div>
        <div className="twin-flow">
          <div className="hardware">
            <CircuitBoard size={32} />
            <strong>ESP32</strong>
            <small>SENSOR TELEMETRY</small>
          </div>
          <ArrowRight className="flow-arrow" />
          <div className="processing">
            <div>
              <Server size={16} /> Flask API
            </div>
            <div>
              <Sparkles size={16} /> XGBoost inference
            </div>
          </div>
          <ArrowRight className="flow-arrow" />
          <div className="health">
            <Activity size={20} />
            <strong>Motor health</strong>
            <div className="wave">
              <svg viewBox="0 0 180 45" aria-hidden="true">
                <path d="M0 25 H20 L28 19 L35 28 L44 8 L53 36 L62 22 H80 L90 16 L100 30 L110 13 L121 27 H145 L155 20 L164 25 H180" />
              </svg>
            </div>
            <small>DASHBOARD & INSIGHTS</small>
          </div>
        </div>
        <div className="sensor-row">
          MPU6050 <span>LM35</span> DHT22 <span>ACS712</span> Encoder
        </div>
        <p className="illustration-note">
          Architecture illustration · no simulated live readings
        </p>
      </div>
    );
  if (id === "dreamx")
    return (
      <div className="project-visual commerce">
        <div className="diagram-top">
          <span>DREAMX / APPLICATION LAYERS</span>
          <ShoppingBag size={17} />
        </div>
        <div className="shop-window">
          <div className="shop-title">
            dream<span>x</span>
            <small>BROWSE → CART → ACCOUNT</small>
          </div>
          <div className="product-shapes">
            <div>
              <span className="shape-bag" />
              <small>Browse products</small>
            </div>
            <div>
              <span className="shape-box" />
              <small>Manage cart</small>
            </div>
            <div>
              <LockKeyhole size={35} />
              <small>Protected account</small>
            </div>
          </div>
        </div>
        <div className="api-strip">
          <span>Next.js UI</span>
          <ArrowRight size={14} />
          <span>Express + JWT</span>
          <ArrowRight size={14} />
          <span>MongoDB</span>
        </div>
        <p className="illustration-note">
          Conceptual interface & application architecture
        </p>
      </div>
    );
  if (id === "gaming-leaderboard")
    return (
      <div className="project-visual architecture-visual leaderboard-visual">
        <div className="diagram-top">
          <span>LEADERBOARD / STORAGE & RANKING</span>
          <Database size={17} />
        </div>
        <div className="architecture-flow">
          <div className="architecture-step">
            <Server />
            <strong>Express API</strong>
            <small>Submit scores · look up ranks</small>
          </div>
          <ArrowRight className="architecture-arrow" />
          <div className="architecture-branches">
            <div className="architecture-step">
              <Database />
              <strong>PostgreSQL</strong>
              <small>Transactions · durable scores</small>
            </div>
            <div className="architecture-step">
              <Activity />
              <strong>Redis</strong>
              <small>Sorted sets · cached rankings</small>
            </div>
          </div>
        </div>
        <p className="illustration-note">
          Conceptual architecture · database fallback for rank lookup
        </p>
      </div>
    );
  if (id === "quiz-masters")
    return (
      <div className="project-visual architecture-visual quiz-visual">
        <div className="diagram-top">
          <span>QUIZ MASTERS / BROWSER EXPERIENCE</span>
          <LockKeyhole size={17} />
        </div>
        <div className="quiz-subjects">
          <span>Math</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <div className="architecture-flow">
          <div className="architecture-step">
            <strong>React UI</strong>
            <small>Subjects & page routing</small>
          </div>
          <ArrowRight className="architecture-arrow" />
          <div className="architecture-step">
            <Database />
            <strong>localStorage</strong>
            <small>Browser-local score history</small>
          </div>
        </div>
        <p className="illustration-note">
          Conceptual architecture · scores stay in the same browser
        </p>
      </div>
    );
  return null;
}
