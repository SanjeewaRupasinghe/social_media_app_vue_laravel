<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            "posts" => Post::latest()->get(),
            200
        ]);
    }

    // /**
    //  * Show the form for creating a new resource.
    //  */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $image_name = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_name = 'images/' . time() . '-' . preg_replace('/[^A-Za-z0-9\-\.]/', '', $image->getClientOriginalName());
            $image->move(storage_path('app/public/images'), $image_name);
            $request->merge(['image' => $image_name]);
        }

        $post = Post::create([
            "image" => $image_name,
            "description" => $request->description,
            "user_id" => $request->user_id,
        ]);

        return response()->json([
            "message" => "Post created successfully",
            "post" => $post,
            201
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return response()->json([
            "post" => $post,
            200
        ]);
    }

    // /**
    //  * Show the form for editing the specified resource.
    //  */
    // public function edit(Post $post)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        Log::channel('post')->info(json_encode($request->all()));
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_name = 'images/' . time() . '-' . preg_replace('/[^A-Za-z0-9\-\.]/', '', $image->getClientOriginalName());
            $image->move(storage_path('app/public/images'), $image_name);
            $post->image = $image_name;
        }

        return response()->json([
            $request->description,
            $request->user_id,
        ]);

        $post->description = $request->description;
        $post->user_id = $request->user_id;
        $post->save();

        return response()->json([
            "message" => "Post updated successfully",
            "post" => $post,
            200
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json([
            "message" => "Post deleted successfully",
            "post" => $post,
            200
        ]);
    }
}
