import React, { useEffect } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import blogPosts from './data/blogPosts.json';
import Navbar from './pages/Menu/Menu';
import LandingPage from './pages/Home/Landing';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Post from './pages/Blog/Post';
import ReactGA from 'react-ga';

// Initialize Google Analytics
ReactGA.initialize('G-BR2WGQG60FC');

// Track page views when route changes
const TrackPageViews = () => {
  const location = useLocation();
  
  useEffect(() => {
    ReactGA.set({ page: location.pathname + location.search });
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

const Routes = () => {
  return (
    <>
      <TrackPageViews />
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={Post} />
        {/* Redirect old ID-based URLs to slug-based URLs */}
        <Route 
          path="/blog/:id(\\d+)" 
          render={({ match }) => {
            const post = blogPosts.find(p => p.id.toString() === match.params.id);
            if (post) {
              return <Redirect to={`/blog/${post.slug}`} />;
            }
            return <Redirect to="/blog" />;
          }} 
        />
        {/* Redirect old /try route to /about for backward compatibility */}
        <Redirect from="/try" to="/about" />
        {/* Redirect any other routes to home */}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Routes;