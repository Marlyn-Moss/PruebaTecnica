<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class SpotifyController extends Controller
{
    protected $spotifyService;
    protected $client;
    protected $accessToken;

    public function login()
    {
        $this->client = new Client(['base_uri' => 'https://api.spotify.com/v1/']);
        $this->accessToken = 'your_spotify_access_token'; // Reemplaza con tu token de acceso a Spotify
    }

    public function search(Request $request)
    {
        $query = $request->input('q');
        $type = $request->input('type');

        $response = $this->client->request('GET', 'search', [
            'query' => [
                'q' => $query,
                'type' => $type,
            ],
            'headers' => [
                'Authorization' => 'Bearer ' . $this->accessToken,
            ],
        ]);

        return response()->json(json_decode($response->getBody()), $response->getStatusCode());
    }

    public function getAlbum($id)
    {
        $response = $this->client->request('GET', 'albums/' . $id, [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->accessToken,
            ],
        ]);

        return response()->json(json_decode($response->getBody()), $response->getStatusCode());
    }

    public function getSong($id)
    {
        $response = $this->client->request('GET', 'tracks/' . $id, [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->accessToken,
            ],
        ]);

        return response()->json(json_decode($response->getBody()), $response->getStatusCode());
    }

    public function getFavorites()
    {
        $api = $this->spotifyService->getApi();
        $tracks = $api->getMySavedTracks();

        return view('favorites', ['tracks' => $tracks->items]);
    }

    public function addToFavorites(Request $request)
    {
        // Implementa la lógica para agregar una canción a las favoritas
    }


}
