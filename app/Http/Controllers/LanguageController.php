<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Translation;

class LanguageController extends Controller {
	public function get(Request $request) {
		if($request->has('id') && $request->has('languageId')) {
			$translation = Translation::where([
				'translationId' => $request->id,
				'languageId' => $request->languageId
			]);
			
			return response()->json(['status' => 200, 'translation' => $translation->first()]);
		};
	}
}
