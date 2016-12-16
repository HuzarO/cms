<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTranslationsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('translations', function(Blueprint $table) {
			$table->increments('id');
			$table->string('translationId');
			$table->string('translation');
			$table->integer('languageId', false, true);
			$table->foreign('languageId')->references('id')->on('languages');
		});
	}
	
	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('translations');
	}
}
