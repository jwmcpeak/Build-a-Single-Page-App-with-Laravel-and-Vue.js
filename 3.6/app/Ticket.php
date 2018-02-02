<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
        'email',
        'title',
        'content',
        'slug'
    ];

    public function user() {
        return $this->belongsTo('App\User')->withDefault();
    }
}
