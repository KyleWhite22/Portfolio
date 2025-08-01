// Updated Profile.jsx with game picker functionality
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './GameAI.css';

function GameAI() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [rotation, setRotation] = useState(0);
    const [topGames, setTopGames] = useState([]);
    const [recommendations, setRecommendations] = useState('');
    const [showGamePicker, setShowGamePicker] = useState(false);
    const [customSelection, setCustomSelection] = useState([]);
    const requestRef = useRef();
    const [ratings, setRatings] = useState(() => {
        const stored = localStorage.getItem('gameRatings');
        return stored ? JSON.parse(stored) : {};
    });
    const [paused, setPaused] = useState(false);
    const [pendingRatingAppId, setPendingRatingAppId] = useState(null);

    const setRating = (appid, value) => {
        const updated = { ...ratings, [appid]: value };
        setRatings(updated);
        localStorage.setItem('gameRatings', JSON.stringify(updated));
    };
    useEffect(() => {
        try {
            const storedTopThree = localStorage.getItem('topThree');
            if (storedTopThree && storedTopThree !== "undefined") {
                const parsed = JSON.parse(storedTopThree);
                setTopGames(parsed);
                setCustomSelection(parsed);
            } else {
                setTopGames([]);
            }
        } catch (err) {
            console.error("\u274C Failed to parse topThree from localStorage:", err);
            setTopGames([]);
        }
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/auth/user', { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                if (data.user) {
                    setUser(data.user);
                    fetchGames(data.user.id);
                } else {
                    setLoading(false);
                }
            })
            .catch(err => {
                console.error('Failed to fetch user:', err);
                setLoading(false);
            });
    }, []);

    function fetchGames(steamId) {
        fetch(`${import.meta.env.VITE_API_URL}/api/games/user/${steamId}`)
            .then(res => res.json())
            .then(data => {
                setGames(data.allGames || []);
                if (Array.isArray(data.topThree)) {
                    localStorage.setItem('topThree', JSON.stringify(data.topThree));
                    setTopGames(data.topThree);
                    setCustomSelection(data.topThree);
                } else {
                    localStorage.removeItem('topThree');
                    setTopGames([]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch games:', err);
                setLoading(false);
            });
    }

    const fetchRecommendations = async () => {
        setLoading(true);
        try {
            const res =  await fetch(`${import.meta.env.VITE_API_URL}/api/recommend`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gamesWithTags: topGames }),
            });

            const data = await res.json();
            setRecommendations(data.recommendations);
        } catch (err) {
            setRecommendations('Failed to fetch recommendations.');
            console.error('\u274C Error fetching recommendations:', err);
        }
        setLoading(false);
    };

    useEffect(() => {
        const animate = () => {
            if (!paused) {
                setRotation(prev => prev + 0.05);
            }
            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [paused]); // ✅ pause-aware

    if (!user) return <p>You are not logged in with Steam.</p>;

    return (
        <div className="gameai-wrapper">
            <div className="profile-container"></div>
            <div className="profile-container">
                <div className="gameai-content">
                    <div className="profile-header">
                        <img
                            className="avatar"
                            src={user.photos[2]?.value || user.photos[0].value}
                            alt="avatar"
                        />
                        <h1 className="username">{user.displayName}</h1>
                    </div>

                    <p className="steam-games-title">Your Steam Games:</p>

                    <div className="carousel-container">
                        {paused && <div className="pause-overlay"></div>}
                        <div className="carousel-wrapper">
                            <div className="carousel-inner">
                                {games.map((game, index) => {
                                    const angle = (360 / games.length) * index;
                                    const angleWithRotation = angle + rotation;
                                    const rad = (angleWithRotation * Math.PI) / 180;
                                    const isVisible = Math.cos(rad) > 0.5;
                                    const dipAmount = -60;
                                    const yOffset = -Math.cos(rad) * dipAmount + dipAmount;

                                    return (
                                        <div
                                            key={game.appid}
                                            className={`game-card ${isVisible ? 'visible' : ''}`}
                                            style={{
                                                transform: `
            rotateY(${angleWithRotation}deg)
            translateZ(500px)
            translateY(${yOffset}px)
        `
                                            }}
                                            onClick={() => {
                                                setPaused(true);
                                                setPendingRatingAppId(game.appid);
                                            }}
                                        >
                                            <img
                                                className="game-image"
                                                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
                                                alt={game.name}
                                                onError={(e) => (e.target.style.display = 'none')}
                                            />
                                            <div className="game-info">
                                                <p>{game.name}</p>
                                                <p>{Math.round(game.playtime_forever / 60)} hrs</p>

                                                {/* Star rating UI (always shown, but only clickable if selected) */}
                                                <div className="rating-stars">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <span
                                                            key={star}
                                                            className={`star ${ratings[game.appid] >= star ? 'filled' : ''} ${pendingRatingAppId === game.appid ? 'clickable' : 'disabled'}`}
                                                            onClick={(e) => {
                                                                if (pendingRatingAppId === game.appid) {
                                                                    e.stopPropagation();
                                                                    setRating(game.appid, star); // ✅ Only rate here — don't unpause
                                                                }
                                                            }}

                                                        >
                                                            ★
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Show Skip button only when game is selected */}
                                                {pendingRatingAppId === game.appid && (
                                                    <button
                                                        className="submit-rating-btn"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setPaused(false);
                                                            setPendingRatingAppId(null);
                                                        }}
                                                    >
                                                        Submit
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="chatbot-container">
                        <h1>AI Game Recommender</h1>


                        <p className="chatbot-subtext">3 Chosen Games</p>
                        <div className="top-games inside">
                            {topGames.map((game) => (
                                <div className="top-game-large" key={game.appid}>
                                    <img
                                        className="top-game-image"
                                        src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
                                        alt={game.name}
                                        onError={(e) => (e.target.style.display = 'none')}
                                    />
                                    <div className="top-game-info">
                                        <p>{game.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="customize-button" onClick={() => setShowGamePicker(true)}>
                            Customize Games
                        </button>
                        <div className="cube-button-container" onClick={fetchRecommendations}>
                            <div className="cube-label">{loading ? 'Thinking...' : 'Get Recommendations'}</div>
                            <div className={`globe-container ${loading ? 'loading' : ''}`}>
                                <div className="globe">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={`lat-${i}`} className="latitude" style={{ transform: `rotateX(${i * 30}deg)` }} />
                                    ))}
                                    {[...Array(6)].map((_, i) => (
                                        <div key={`lon-${i}`} className="longitude" style={{ transform: `rotateY(${i * 30}deg)` }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {recommendations && (
                            <div className="recommendation-output">
                                <p className="recommendation-header">
                                    Based on your 3 selected games, we recommend:
                                </p>
                                <pre className="recommendation-text">{recommendations}</pre>
                            </div>
                        )}
                    </div>

                    {showGamePicker && (
                        <div className="game-picker-modal">
                            <h2>Select 3 Games</h2>
                            <div className="game-picker-list">
                                {games.map(game => (
                                    <div
                                        key={game.appid}
                                        className={`game-picker-item ${customSelection.find(g => g.appid === game.appid) ? 'selected' : ''
                                            }`}
                                        onClick={() => {
                                            setCustomSelection(prev => {
                                                const exists = prev.find(g => g.appid === game.appid);
                                                if (exists) return prev.filter(g => g.appid !== game.appid);
                                                if (prev.length < 3) return [...prev, game];
                                                return prev;
                                            });
                                        }}
                                    >
                                        <img
                                            src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
                                            alt={game.name}
                                        />
                                        <p>{game.name}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="save-button"
                                disabled={customSelection.length !== 3}
                                onClick={async () => {
                                    try {
                                        const enriched = await Promise.all(
                                            customSelection.map(async (game) => {
                                                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tags/${game.appid}`);
                                                if (!res.ok) throw new Error(`Failed to fetch tags for ${game.name}`);
                                                const data = await res.json();
                                                return { ...game, tags: data.tags || [] };
                                            })
                                        );

                                        setTopGames(enriched);
                                        localStorage.setItem('topThree', JSON.stringify(enriched));
                                        setShowGamePicker(false);
                                    } catch (err) {
                                        console.error("❌ Failed to fetch tags or save selection:", err);
                                        alert("Failed to save selection. Check console for errors.");
                                    }
                                }}
                            >
                                Save Selection
                            </button>

                        </div>
                    )}
                </div>
            </div>
            </div>
            );
}

            export default GameAI;