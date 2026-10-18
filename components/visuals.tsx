import {
  Activity,
  ArrowRight,
  CircuitBoard,
  Database,
  FileText,
  Layers,
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
      aria-label="Software system illustration: input data flows through an API and model into a usable interface"
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
          <span>Intelligence</span>
          <small>LEARN & APPLY</small>
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
          <span>React UI</span>
          <ArrowRight size={14} />
          <span>Node.js + JWT</span>
          <ArrowRight size={14} />
          <span>MongoDB</span>
        </div>
        <p className="illustration-note">
          Conceptual interface & application architecture
        </p>
      </div>
    );
  if (id === "warehouse")
    return (
      <div className="project-visual warehouse">
        <div className="diagram-top">
          <span>DATA WAREHOUSE / TRANSFORMATION FLOW</span>
          <Layers size={17} />
        </div>
        <div className="warehouse-flow">
          <div className="source-label">
            CRM / ERP<small>7+ source datasets</small>
          </div>
          <div className="data-layer bronze">
            <span>01</span>
            <Database />
            <strong>Bronze</strong>
            <small>Raw ingestion</small>
          </div>
          <div className="data-layer silver">
            <span>02</span>
            <Database />
            <strong>Silver</strong>
            <small>Clean & transform</small>
          </div>
          <div className="data-layer gold">
            <span>03</span>
            <Database />
            <strong>Gold</strong>
            <small>Analytics-ready</small>
          </div>
        </div>
        <div className="warehouse-footer">
          <span>SQL + PySpark</span>
          <span>Fact tables ↔ Dimensions</span>
        </div>
        <p className="illustration-note">
          Layered pipeline · star-schema dimensional model
        </p>
      </div>
    );
  return (
    <div className="project-visual pdf">
      <div className="diagram-top">
        <span>DOCUMENT LEARNING / EXPERIMENT</span>
        <FileText size={17} />
      </div>
      <div className="pdf-flow">
        <FileText size={46} />
        <span className="text-lines">
          <i />
          <i />
          <i />
          <i />
        </span>
        <ArrowRight />
        <div>
          <Sparkles size={28} />
          <strong>Extract. Retrieve. Explore.</strong>
          <small>PDF text → preparation → training / retrieval</small>
        </div>
      </div>
      <p className="illustration-note">An exploration with DistilGPT-2</p>
    </div>
  );
}
