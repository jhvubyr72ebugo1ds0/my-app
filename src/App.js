import React from 'react';
import ArticlesList from "./components/ArticlesList";
import ArticleForm from "./components/ArticleForm";
import FetchedArticlesList from "./components/FetchedArticlesList";

function App() {
  return (
      <div>
          <ArticleForm/>
          <h2>Sync</h2>
          <ArticlesList/>
          <h2>Async</h2>
          <FetchedArticlesList />
      </div>
  );
}

export default App;
