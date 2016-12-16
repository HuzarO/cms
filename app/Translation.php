<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Translation extends Model {
	/**
	 * The table associated with the model.
	 *
	 * @var string
	 */
	protected $table = 'translations';
	/**
	 * Indicates if the model should be timestamped.
	 *
	 * @var bool
	 */
	public $timestamps = false;
	
	public function language() {
		return $this->hasOne('App\Language', 'id', 'languageId');
	}
}
