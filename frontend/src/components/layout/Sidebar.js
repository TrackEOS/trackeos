import React, { Component } from "react";
class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className="sidebar">
        <div data-scrollbar="true" data-height="100%">
          <ul className="nav">
            <li className="nav-profile">
              <a href="javascript:;" data-toggle="nav-profile">
                <div className="cover with-shadow" />
                <div className="image">
                  <img src="../assets/img/user/user-13.jpg" alt="" />
                </div>
                <div className="info">
                  <b className="caret pull-right" />
                  Scatter Identity
                  <small>Front end developer</small>
                </div>
              </a>
            </li>
            <li>
              <ul className="nav nav-profile">
                <li>
                  <a href="javascript:;">
                    <i className="fa fa-cog" /> Settings
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="fa fa-pencil-alt" /> Send Feedback
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="fa fa-question-circle" /> Help
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-header">Dashboard</li>
            <li className="has-sub">
              <a href="javascript:;">
                <b className="caret" />
                <i className="fa fa-th-large" />
                <span>Claims</span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="index.html">Dashboard v1</a>
                </li>
                <li>
                  <a href="index_v2.html">Dashboard v2</a>
                </li>
              </ul>
            </li>
            <li className="has-sub">
              <a href="javascript:;">
                <span className="badge pull-right">10</span>
                <i className="fa fa-hdd" />
                <span>Proofs</span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="email_inbox.html">Inbox</a>
                </li>
                <li>
                  <a href="email_compose.html">Compose</a>
                </li>
                <li>
                  <a href="email_detail.html">Detail</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="widget.html">
                <i className="fab fa-simplybuilt" />
                <span>
                  Attestations
                  <span className="label label-theme m-l-5">NEW</span>
                </span>
              </a>
            </li>
            <li className="has-sub">
              <a href="javascript:;">
                <b className="caret" />
                <i className="fa fa-gem" />
                <span>
                  Appreciations
                  <span className="label label-theme m-l-5">NEW</span>
                </span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="ui_general.html">
                    General <i className="fa fa-paper-plane text-theme m-l-5" />
                  </a>
                </li>
                <li>
                  <a href="ui_typography.html">Typography</a>
                </li>
                <li>
                  <a href="ui_tabs_accordions.html">Tabs & Accordions</a>
                </li>
                <li>
                  <a href="ui_unlimited_tabs.html">Unlimited Nav Tabs</a>
                </li>
                <li>
                  <a href="ui_modal_notification.html">
                    Modal & Notification{" "}
                    <i className="fa fa-paper-plane text-theme m-l-5" />
                  </a>
                </li>
                <li>
                  <a href="ui_widget_boxes.html">Widget Boxes</a>
                </li>
                <li>
                  <a href="ui_media_object.html">Media Object</a>
                </li>
                <li>
                  <a href="ui_buttons.html">
                    Buttons <i className="fa fa-paper-plane text-theme m-l-5" />
                  </a>
                </li>
                <li>
                  <a href="ui_icons.html">Icons</a>
                </li>
                <li>
                  <a href="ui_simple_line_icons.html">Simple Line Icons</a>
                </li>
                <li>
                  <a href="ui_ionicons.html">Ionicons</a>
                </li>
                <li>
                  <a href="ui_tree.html">Tree View</a>
                </li>
                <li>
                  <a href="ui_language_bar_icon.html">Language Bar & Icon</a>
                </li>
                <li>
                  <a href="ui_social_buttons.html">Social Buttons</a>
                </li>
                <li>
                  <a href="ui_tour.html">Intro JS</a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="javascript:;"
                className="sidebar-minify-btn"
                data-click="sidebar-minify"
              >
                <i className="fa fa-angle-double-left" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
