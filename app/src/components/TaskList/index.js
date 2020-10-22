import React from "react";
import "./styles.css";

export default function TaskList() {
  return (
      <div class="tasks">
        <div class="toolbar">
          <button>Adicionar tarefa</button>
          <button>Limpar</button>
        </div>


        <div className="table-head">
          <div className="table-cell">TAREFA</div>
          <div className="table-cell">DEADLINE</div>
          <div className="table-cell">TEMPO ESTIMADO DECICADO</div>
        </div>
          
        <div className="table">
          <div className="table-row">
            <div className="table-cell">PA - Autoestudo</div>
            <div className="table-cell">SEG - 23:59</div>
            <div className="table-cell">2h</div>
          </div>

          <div className="table-row">
            <div className="table-cell">PA - Autoestudo</div>
            <div className="table-cell">SEG - 23:59</div>
            <div className="table-cell">2h</div>
          </div>

          <div className="table-row">
            <div className="table-cell">PA - Autoestudo</div>
            <div className="table-cell">SEG - 23:59</div>
            <div className="table-cell">2h</div>
          </div>

          <div className="table-row">
            <div className="table-cell">PA - Autoestudo</div>
            <div className="table-cell">SEG - 23:59</div>
            <div className="table-cell">2h</div>
          </div>

          <div className="table-row">
            <div className="table-cell">PA - Autoestudo</div>
            <div className="table-cell">SEG - 23:59</div>
            <div className="table-cell">2h</div>
          </div>

          <div className="table-row">
            <div className="table-cell">PA - Autoestudo</div>
            <div className="table-cell">SEG - 23:59</div>
            <div className="table-cell">2h</div>
          </div>

          <div className="table-row">
            <div className="table-cell">PA - Autoestudo</div>
            <div className="table-cell">SEG - 23:59</div>
            <div className="table-cell">2h</div>
          </div>

          <div className="table-row">
            <div className="table-cell">PA - Autoestudo</div>
            <div className="table-cell">SEG - 23:59</div>
            <div className="table-cell">2h</div>
          </div>
        </div>

      </div>
    );
  }