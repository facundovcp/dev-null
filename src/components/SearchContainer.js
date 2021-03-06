import React, { useState, useEffect, useCallback } from "react";
import * as JsSearch from "js-search";
import * as styles from "./SearchContainer.module.scss";
import searchIndex from "../../data/searchIndex.json";
import { navigate } from "gatsby";
export default function SearchContainer() {
  const [search, setSearch] = useState({
    results: [],
    engine: {},
    query: "",
  });

  const rebuildIndex = useCallback(() => {
    const searchEngine = new JsSearch.Search("slug");
    searchEngine.sanitizer = new JsSearch.LowerCaseSanitizer();
    searchEngine.indexStrategy = new JsSearch.PrefixIndexStrategy();
    searchEngine.searchIndex = new JsSearch.TfIdfSearchIndex("slug");

    searchEngine.addIndex("title");
    searchEngine.addIndex("subtitle");
    searchEngine.addDocuments(searchIndex.blogs);

    setSearch((search) => ({ ...search, engine: searchEngine }));
  }, []);

  useEffect(() => {
    rebuildIndex();
  }, [rebuildIndex]);

  const performSearch = (e) => {
    const { value } = e.target;
    const results = search.engine.search(value);
    setSearch({ ...search, results, query: value });
  };

  var searchInputHandler = false;

  return (
    <div
      id="main"
      className="columns"
      style={{
        paddingTop: "10%",
        paddingBottom: "5%",
      }}
    >
      <div className="column is-2"></div>
      <div className="column is-8">
        <input
          onChange={performSearch}
          value={search.query}
          className="input"
          type="text"
          placeholder="Search"
        />
        {search.results.length > 0 && (
          <div className={`${styles.options} select is-multiple`}>
            <ul>
              {search.results.map((result) => (
                <li
                  onClick={() => {
                    navigate(`/blogs/${result.slug}`);
                  }}
                  role="presentation"
                  key={result.slug}
                  className={`${styles.option} p-2`}
                >
                  <p className={`${styles.title}`}>{result.title}</p>
                  <p className={`${styles.subtitle}`}>{result.subtitle}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="column is-2"></div>
    </div>
  );
}
