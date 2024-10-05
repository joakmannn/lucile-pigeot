<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{

    protected $fillable = ['title'];

    // Une compétence possède plusieurs méthodes
    public function methods()
    {
        return $this->hasMany(Method::class);
    }}
