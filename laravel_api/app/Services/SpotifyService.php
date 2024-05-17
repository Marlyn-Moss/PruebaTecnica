<?php

namespace App\Services;

use SpotifyWebAPI\Session;
use SpotifyWebAPI\SpotifyWebAPI;

class SpotifyService
{
    protected $session;
    protected $api;

    public function __construct()
    {
        $this->session = new Session(
            config('services.spotify.client_id'),
            config('services.spotify.client_secret'),
            config('services.spotify.redirect_uri')
        );

        $this->api = new SpotifyWebAPI();
    }

    public function getAuthorizeUrl()
    {
        $options = [
            'scope' => [
                'playlist-read-private',
                'user-read-private',
                'user-read-email',
                'user-library-read',
                'user-library-modify',
            ],
        ];

        return $this->session->getAuthorizeUrl($options);
    }

    public function requestAccessToken($code)
    {
        $this->session->requestAccessToken($code);
        $this->api->setAccessToken($this->session->getAccessToken());
    }

    public function getApi()
    {
        return $this->api;
    }
}
