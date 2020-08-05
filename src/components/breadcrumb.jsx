import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";

var tree = [];
var done = null;

class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      parent: null,
      data: null,
      tree: null,
      newTree: null,
    };
  }

  componentWillMount() {
    if (this.props) {
      const { title, parent, data } = this.props;
      if (data !== this.state.data || title !== this.state.title) {
        this.setState(() => {
          return {
            title,
            parent,
            data,
          };
        });
        if (data) {
          this.build(title, data);
        }
      }
    }
  }

  componentDidUpdate() {
    if (this.props) {
      const { title, parent, data } = this.props;
      if (data !== this.state.data || title !== this.state.title) {
        this.setState(() => {
          return {
            title,
            parent,
            data,
          };
        });
        if (data) {
          this.build(title, data);
        }
      }
    }
  }

  build = (title, data) => {
    var oldTree = [];
    oldTree = this.state.tree;
    if (data !== this.state.data) {
      if (true) {
        const categoryList = this.props.data.state.data2.categoryTree;
        tree = [];
        var item = categoryList.find((c) => c.name === title);
        tree.push(item);
        this.hasParent(item, categoryList);
        var length = tree.length;

        var l = length - 1;
        if (!done) {
          this.hasParent(tree[l], categoryList);
        }

        length = tree.length;
        l = length - 1;

        if (!done) {
          this.hasParent(tree[l], categoryList);
        }

        length = tree.length;
        l = length - 1;

        if (!done) {
          this.hasParent(tree[l], categoryList);
        }
      }

      if (done) {
        done = null;

        if (oldTree !== tree) {
          this.setState(() => {
            var treeReversed = tree.reverse();
            return { tree: treeReversed, newTree: "true" };
          });
        }
      }
    }
  };

  hasParent(category, categoryList) {
    if (category !== undefined) {
      if (category.id) {
        var parent = categoryList.find((c) => c.id === category.parent);

        if (parent) {
          if (parent.id) {
            tree.push(parent);
            if (parent.id === 19) {
              done = "true";
            }
          }
        }
      }
    }
  }

  newTo = (key) => {
    return {
      pathname: `${process.env.PUBLIC_URL}/no-sidebar/collection/`,
      category: key,
    };
  };

  collectionLink = (name, i) => {
    if (name !== "") {
      return (
        <Link key={i} to={this.newTo(name)}>
          {name}
        </Link>
      );
    }
  };

  render() {
    const { translate } = this.props;

    if (this.state.tree) {
      return (
        <div className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="page-title" />
              </div>
              <div className="col-md-6">
                <nav aria-label="breadcrumb" className="theme-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={`${process.env.PUBLIC_URL}`}>
                        {translate("home")}
                      </Link>
                    </li>
                    {this.state.tree.map((c, i) => {
                      return (
                        <li key={i} className="breadcrumb-item">
                          {this.collectionLink(c.name, i)}
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

export default withTranslate(Breadcrumb);
