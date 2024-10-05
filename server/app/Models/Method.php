<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Method extends Model
{
    protected $fillable = ['title', 'description', 'photo', 'skill_id'];

    // Une méthode appartient à une compétence
    public function skill()
    {
        return $this->belongsTo(Skill::class);
    }
}
