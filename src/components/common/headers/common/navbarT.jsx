import React, {Component} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Drawer from "@material-ui/core/Drawer";
import {withStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../../context/productContext";

import "../../style.css";

/*https://medium.com/gammastack/making-a-nested-sidebar-menu-in-react-f8595031995e */

const styles = {
  body: {
    fontFamily: "Poppins,Arial,Helvetica !important",
    background: " #ebebec !important",
    //color: "var(--mainDark) !important"
  },
  list: {
    width: "100% !important",
    minHeight: "fit-content !important",
    display: "flex !important",
    maxHeight: "90% ",
  },
  links: {
    textDecoration: "none",
  },
  menuHeader: {
    paddingLeft: "30px",
    fontSize: "2.3rem !important",
  },
};

var tree = [];
var value = [];

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    if (this.state.tree !== tree) {
      this.setState({tree: tree});
      //   console.log(this.state);
    }
  }

  handleClick(e) {
    // console.log(e);

    if (e.currentTarget) {
      // console.log(e.currentTarget.alt);
      // console.log(e.currentTarget.level);
      // console.log(e.currentTarget.id);
      // console.log(e);
      this.setState({
        anchorEl2: e.currentTarget,
        setAnchorEl2: e.currentTarget,
        open2: true,
      });

      var data = {id: e.currentTarget.id, parent: this.state.lastParentHover};
      this.value.categoryClick(data);
    }

    if (e.name) {
      //  console.log(e.name);
      // console.log(this.value);
      var data = {id: e.id, parent: e.parent};
      this.value.categoryClick(data);
    }
  }

  // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
  handler(children) {
    const {classes} = this.props;
    const {state} = this;
    return children.map((subOption) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem button key={subOption.name}>
              <Link to={subOption.url} className={classes.links}>
                <ListItemText inset primary={subOption.name} />
              </Link>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => this.handleClick(subOption.name)}>
            <ListItemText inset primary={subOption.name} />
            {state[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
            {this.handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  }

  // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
  handlerTree(tree, value) {
    const {classes} = this.props;
    const {state} = this;
    // console.log(value);
    // console.log(tree);

    if (value.tree) {
      if (this.value !== value) {
        this.value = value;
      }

      //  console.log(tree);
      var i = 0;
      return tree.children[0].map((category) => {
        //   console.log(category);

        if (!category) {
          return (
            <div key={category.name}>
              <ListItem button key={category.name}>
                <Link to={category.url} className={classes.links}>
                  <ListItemText inset primary={category.name} />
                </Link>
              </ListItem>
            </div>
          );
        }
        return (
          <div key={category.name}>
            <ListItem button onClick={() => this.handleClick(category)}>
              <ListItemText inset primary={category.name} />
              {state[category.name] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={state[category.name]} timeout="auto" unmountOnExit>
              {category.children[0] ? this.handlerTree(category, value) : null}
            </Collapse>
          </div>
        );
      });
    }
  }

  render() {
    const {classes, drawerOpen, menuOptions} = this.props;
    return (
      <ProductConsumer>
        {(value) => {
          if (value.isMenuLoaded) {
            if (value.tree2) {
              if (this.state.tree !== value.tree2) {
                tree = value.tree2;
                value = value;
                //        console.log(tree);
              }

              return (
                <div className={`${classes.list}`}>
                  {" "}
                  <Drawer
                    variant="persistent"
                    anchor="left"
                    open
                    className="menubar-list"
                    classes={{paper: classes.list}}
                  >
                    <div className="menubar-list2">
                      <List>{this.handlerTree(value.tree2, value)}</List>
                    </div>
                  </Drawer>
                </div>
              );
            }
          }
        }}
      </ProductConsumer>
    );
  }
}

export default withStyles(styles)(MenuBar);
