import "../assets/css/Infor.css";
import axios from "axios";
import io from "socket.io-client";

import React, { useEffect, useState } from "react";

function Infor(){
    const socket = io("http://localhost:3001");

    return(
        <div className="Infor">
            <div className="controller">
                <div className="controller-tools">
                    <div className="title">Temporature Room</div>
                    <div className="infor_of--tool">
                        <div className="infor-number">23
                            <div className="infor-unit">°</div>
                        </div>
                    </div>
                </div>
                <div className="controller-tools">
                    <div className="title">Humidity Room</div>
                    <div className="infor_of--tool">
                    <div className="infor-number">23
                            <div className="infor-unit">%</div>
                        </div>
                    </div>
                </div>
                <div className="controller-tools">
                <div className="title">Light Room</div>

                    <div className="infor_of--tool">
                    <div className="infor-number">23
                            <div className="infor-unit">lux</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lights">
                <button className="light light1">
                    <i class="fas fa-sun icon-light"></i>
                </button>
                <button className="light light2">
                    <i class="fas fa-moon icon-light"></i>
                </button>
            </div>
        </div>
    )
}
export default Infor;
