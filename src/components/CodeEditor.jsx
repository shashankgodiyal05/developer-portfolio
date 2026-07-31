import { motion } from "framer-motion";
import "./../styles/codeEditor.css";

function CodeEditor() {
  return (
    <motion.div
      className="editor-window"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="editor-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>

        <span className="file-name">portfolio.jsx</span>
      </div>

      <div className="editor-body">
        <p>
          <span className="keyword">const</span>{" "}
          <span className="variable">developer</span>{" "}
          <span className="operator">=</span>{" "}
          <span className="brace">{`{`}</span>
        </p>

        <p>
          &nbsp;&nbsp;
          <span className="property">name : </span>
          <span className="string"> "Shashank Godiyal"</span>,
        </p>

        <p>
          &nbsp;&nbsp;
          <span className="property">role : </span>
          <span className="string"> "React Developer"</span>,
        </p>

        <p>
          &nbsp;&nbsp;
          <span className="property">frontend : </span>
          <span className="array">
            ["React", "JavaScript", "Bootstrap"]
          </span>,
        </p>

        <p>
          &nbsp;&nbsp;
          <span className="property">backend : </span>
          <span className="array">
            ["Python", "Django", "REST API"]
          </span>,
        </p>

        <p>
          &nbsp;&nbsp;
          <span className="property">database : </span>
          <span className="array">["MySQL"]</span>,
        </p>

        <p>
          &nbsp;&nbsp;
          <span className="property">openToWork : </span>
          <span className="boolean"> true</span>
          <span className="cursor">|</span>
        </p>

        <p>
          <span className="brace">{`}`}</span>;
        </p>
      </div>
    </motion.div>
  );
}

export default CodeEditor;